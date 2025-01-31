import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Functionality page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-functionality-page',
  template: `<div>Functionality</div>`
})
export class FunctionalityPageComponent {}
