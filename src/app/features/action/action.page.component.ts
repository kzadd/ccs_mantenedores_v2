import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Action page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-action-page',
  template: `<div>Action</div>`
})
export class ActionPageComponent {}
