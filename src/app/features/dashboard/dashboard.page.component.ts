import { ChangeDetectionStrategy, Component } from '@angular/core'

import { WelcomeContainerComponent } from './ui/containers/welcome.container.component'

/**
 * Dashboard page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WelcomeContainerComponent],
  selector: 'app-dashboard-page',
  template: `<app-welcome-container />`
})
export class DashboardPageComponent {}
