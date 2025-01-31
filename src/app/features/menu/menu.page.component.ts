import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Menu page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-menu-page',
  template: `<div>Menu</div>`
})
export class MenuPageComponent {}
