import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * User page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-user-page',
  template: `<div>User</div>`
})
export class UserPageComponent {}
