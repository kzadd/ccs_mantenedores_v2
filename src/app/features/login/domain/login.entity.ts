import { AppError } from '@app/shared/types/exception.types'
import { FormControlsOf } from '@app/shared/types/form.types'

export interface LoginState {
  error: AppError | null
  loading: boolean
  user: UserProfile | null
}

export interface SignInResponse {
  JWTToken: string
}

export interface UserCredentials {
  password: string
  username: string
}

export type UserCredentialsForm = FormControlsOf<UserCredentials>
export type UserCredentialsKey = Extract<keyof UserCredentials, string>

export interface UserProfile {
  lastname: string
  name: string
}
