import { inject, Injectable } from '@angular/core'
import { Twofish } from 'ng-twofish'
import { Observable } from 'rxjs'

import { env } from '@app/shared/configs/environment.config'
import { ApiService } from '@app/shared/services/api.service'
import { ApiResponse } from '@app/shared/types/api.types'
import { SignInResponse, UserCredentials } from '../domain/login.entity'
import { LoginRepository } from '../domain/login.repository'

/**
 * Repository implementation that handles login data from an external API.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiLoginRepository implements LoginRepository {
  private _api = inject(ApiService)

  signIn(userCredentials: UserCredentials): Observable<ApiResponse<SignInResponse>> {
    const body = {
      GamWSLoginInSDT: {
        CustomParameters: {
          Items: [
            {
              Id: Twofish.encrypt64('Pais', env.HASH),
              Token: '',
              Value: Twofish.encrypt64('PE', env.HASH)
            },
            {
              Id: 'App',
              Token: '',
              Value: 'Mensajeria'
            },
            {
              Id: 'Version',
              Token: '',
              Value: '1'
            }
          ]
        },
        Login: Twofish.encrypt64(userCredentials.username, env.HASH),
        Password: Twofish.encrypt64(userCredentials.password, env.HASH)
      }
    }

    const customHeaders = {
      'Ocp-Apim-Subscription-Key': env.LOGIN_ID
    }

    return this._api.post(`${env.API_GAM_URL}/genexus/gam/v1/servicios/login`, {
      body,
      customHeaders
    })
  }
}
