import { HttpErrorResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { jwtDecode } from 'jwt-decode'
import { catchError, concatMap, map, of } from 'rxjs'

import { TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { createError } from '@app/shared/exceptions/create-error.exception'
import { JwtResponse } from '@app/shared/types/JWT.types'
import { putCookie } from '@app/shared/utils/cookie.utils'
import { ApiLoginRepository } from '../infrastructure/login.service'
import { loginActions } from './login.actions'

@Injectable()
export class LoginEffect {
  private _actions = inject(Actions)
  private _apiLoginRepository = inject(ApiLoginRepository)

  /**
   * Effect that handles login thunk.
   */
  loginThunk$ = createEffect(() => {
    return this._actions.pipe(
      ofType(loginActions.signIn),
      concatMap(({ userCredentials }) => {
        return this._apiLoginRepository.signIn(userCredentials).pipe(
          map(({ data }) => {
            if (!data.JWTToken) {
              throw new Error('INVALID_CREDENTIALS_ERROR')
            }

            const jwt = jwtDecode<JwtResponse>(data.JWTToken ?? '')
            const { FirstName = '', LastName = '' } = JSON.parse(jwt.User)
            const lastname = LastName.trim().toUpperCase()
            const name = FirstName.trim().toUpperCase()

            putCookie(TOKEN_KEYS.accessToken, data.JWTToken)

            return loginActions.signInSuccess({ user: { lastname, name } })
          }),
          catchError((error: HttpErrorResponse) => {
            const failureResponse = {
              error: createError({
                originalError: error,
                reason: 'SOMETHING_WENT_WRONG_ERROR'
              }).toObject()
            }

            return of(loginActions.signInFailure(failureResponse))
          })
        )
      })
    )
  })
}
