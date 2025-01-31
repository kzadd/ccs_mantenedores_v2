import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core'
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { FormControlsOf } from '@app/shared/types/form.types'
import { getFormControlErrorMessage } from '@app/shared/utils/form-error.utils'
import { isRequired } from '@app/shared/utils/validators.utils'

interface Country {
  id: string
  name: string
}

type CountryForm = FormControlsOf<Country>
type CountryKey = Extract<keyof Country, string>

/**
 * Form container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  selector: 'app-form-container',
  styleUrl: './form.container.component.scss',
  templateUrl: './form.container.component.html'
})
export class FormContainerComponent implements OnInit {
  private _formBuilder = inject(NonNullableFormBuilder)
  private _router = inject(Router)

  @Input({ required: true }) view!: string

  form: FormGroup = this._formBuilder.group<CountryForm>({
    id: this._formBuilder.control('', [isRequired]),
    name: this._formBuilder.control('', [isRequired])
  })

  get submitButtonLabel(): string {
    return this.view === 'edit' ? 'Actualizar acción' : 'Crear acción'
  }

  ngOnInit(): void {
    if (this.view === 'edit') {
      this.form.patchValue({
        id: '1',
        name: 'Opción 1'
      })

      this.form.get('id')?.disable()
    }
  }

  getErrorMessage(controlName: CountryKey): string {
    const control = this.form.get(controlName)

    if (!control) return ''

    return getFormControlErrorMessage(control)
  }

  handleClearForm(): void {
    this.form.reset()
  }

  handleSubmit(): void {
    const { id, name } = this.form.getRawValue()

    if (this.form.valid) {
      console.log('signIn', { id, name })
      this._router.navigate([FULL_ROUTE_PATHS.dashboard.country.root])
    } else {
      this.form.markAllAsTouched()
    }
  }
}
