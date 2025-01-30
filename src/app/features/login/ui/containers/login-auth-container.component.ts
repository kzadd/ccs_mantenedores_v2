import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircleX, lucideEye, lucideEyeOff, lucideLogIn } from '@ng-icons/lucide'
import { Store } from '@ngrx/store'
import { take } from 'rxjs'

import { TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'
import { putCookie } from '@app/shared/utils/cookie.utils'
import { getFormControlErrorMessage } from '@app/shared/utils/form-error.utils'
import { isRequired } from '@app/shared/utils/validators.utils'
import { loginActions } from '../../application/login.actions'
import { loginFeature } from '../../application/login.feature'
import { UserCredentialsForm, UserCredentialsKey } from '../../domain/login.entity'

const LOGIN_ICONS = {
  errorIcon: lucideCircleX,
  hidePasswordIcon: lucideEyeOff,
  loginIcon: lucideLogIn,
  showPasswordIcon: lucideEye
}

/**
 * Login auth container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, ReactiveFormsModule],
  selector: 'app-login-auth-container',
  styleUrl: './login-auth-container.component.scss',
  templateUrl: './login-auth-container.component.html',
  viewProviders: [provideIcons(LOGIN_ICONS)]
})
export class LoginAuthContainerComponent implements OnInit {
  private _formBuilder = inject(NonNullableFormBuilder)
  private _router = inject(Router)
  private _store = inject(Store)

  error = toSignal(this._store.select(loginFeature.selectError), { initialValue: null })
  loading = toSignal(this._store.select(loginFeature.selectLoading), { initialValue: false })

  form: FormGroup = this._formBuilder.group<UserCredentialsForm>({
    password: this._formBuilder.control('', [isRequired]),
    username: this._formBuilder.control('', [isRequired])
  })

  showPassword = false

  ngOnInit(): void {
    this._store.select(loginFeature.selectLoading).subscribe(loading => {
      if (loading) {
        this.form.disable()
      } else {
        this.form.enable()
      }
    })
  }

  getErrorMessage(controlName: UserCredentialsKey): string {
    const control = this.form.get(controlName)

    if (!control) return ''

    return getFormControlErrorMessage(control)
  }

  handleCleanError(): void {
    if (this.error()) {
      this._store.dispatch(loginActions.clearError())
    }
  }

  handleClearForm(): void {
    this.form.reset()
  }

  handleSignIn(): void {
    const { password, username } = this.form.getRawValue()

    if (this.form.valid) {
      // TODO: remove this code when the API is ready
      console.log('signIn', { password, username })
      putCookie(TOKEN_KEYS.accessToken, 'testing')
      this._router.navigate([ROUTE_PATHS.dashboard])

      // this._store.dispatch(loginActions.signIn({ userCredentials: { password, username } })) // TODO: Uncomment this line when the API is ready

      this._store
        .select(loginFeature.selectLoginState)
        .pipe(take(2))
        .subscribe(state => {
          if (!state.loading && !state.error) {
            this.handleClearForm()
            this._router.navigate([ROUTE_PATHS.dashboard])
          }
        })
    } else {
      this.form.markAllAsTouched()
    }
  }

  handleTogglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
}
