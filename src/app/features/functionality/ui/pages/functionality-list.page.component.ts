import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { TableContainerComponent } from '../containers/table/table.container.component'

/**
 * Functionality list page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, TableContainerComponent],
  selector: 'app-functionality-list-page',
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
export class FunctionalityListPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Funcionalidades' }
  ]

  entityName: RoutePathKey = 'functionality'
  title = 'Listado de funcionalidades'
  view = 'list'
}
