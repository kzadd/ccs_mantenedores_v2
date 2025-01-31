import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Company page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-company-page',
  template: `<div>Company</div>`
})
export class CompanyPageComponent {}
