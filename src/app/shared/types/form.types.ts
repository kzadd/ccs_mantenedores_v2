import { FormControl } from '@angular/forms'

export type FormControlsOf<T> = {
  [Key in keyof T]: FormControl<T[Key]>
}
