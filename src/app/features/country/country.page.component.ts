import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Country page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-country-page',
  template: `<div>Country</div>`
})
export class CountryPageComponent {}
