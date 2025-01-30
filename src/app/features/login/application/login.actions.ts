import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { AppError } from '@app/shared/types/exception.types'
import { UserCredentials, UserProfile } from '../domain/login.entity'

/**
 * Actions for managing login data.
 */
export const loginActions = createActionGroup({
  events: {
    'Clear error': emptyProps(),
    SignIn: props<{ userCredentials: UserCredentials }>(),
    'SignIn failure': props<{ error: AppError }>(),
    'SignIn success': props<{ user: UserProfile }>()
  },
  source: 'Login'
})
