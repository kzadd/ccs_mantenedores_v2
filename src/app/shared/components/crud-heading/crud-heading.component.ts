import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowLeft, lucideHouse, lucidePlus } from '@ng-icons/lucide'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'
import { Breadcrumb } from '@app/shared/types/components/crud-heading.types'
import { RoutePathKey } from '@app/shared/types/route.types'

const HEADING_ICONS = {
  backIcon: lucideArrowLeft,
  createIcon: lucidePlus,
  homeIcon: lucideHouse
}

/**
 * Crud heading component.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, RouterLink],
  selector: 'app-crud-heading',
  styleUrl: './crud-heading.component.scss',
  templateUrl: './crud-heading.component.html',
  viewProviders: [provideIcons(HEADING_ICONS)]
})
export class CrudHeadingComponent {
  private _router = inject(Router)

  @Input({ required: true }) breadcrumbs!: Breadcrumb[]
  @Input({ required: true }) entityName!: RoutePathKey
  @Input({ required: true }) title!: string
  @Input({ required: true }) view!: string

  handleBackToList(): void {
    this._router.navigate([
      `${FULL_ROUTE_PATHS.dashboard.root}/${ROUTE_PATHS[this.entityName]}/${ROUTE_PATHS.list}`
    ])
  }

  handleCreateNewRegister(): void {
    this._router.navigate([
      `${FULL_ROUTE_PATHS.dashboard.root}/${ROUTE_PATHS[this.entityName]}/${ROUTE_PATHS.create}`
    ])
  }
}
