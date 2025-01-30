import { Observable } from 'rxjs'

import { ApiResponse } from '@app/shared/types/api.types'
import { SignInResponse, UserCredentials } from './login.entity'

/**
 * Repository interface that defines the contract for accessing login data.
 */
export interface LoginRepository {
  signIn(login: UserCredentials): Observable<ApiResponse<SignInResponse>>
}
