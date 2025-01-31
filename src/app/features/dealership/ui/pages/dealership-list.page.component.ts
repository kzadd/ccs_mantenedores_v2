import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { TableContainerComponent } from '../containers/table.container.component'

/**
 * Dealership list page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, TableContainerComponent],
  selector: 'app-dealership-list-page',
  template: `
    <app-crud-heading
      [breadcrumbs]="breadcrumbs"
      [entityName]="entityName"
      [title]="title"
      [view]="view"
    />

    <app-table-container />
  `
})
export class DealershipListPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Concesionarios' }
  ]

  entityName: RoutePathKey = 'dealership'
  title = 'Listado de concesionarios'
  view = 'list'
}
