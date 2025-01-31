import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { TableContainerComponent } from '../containers/table/table.container.component'

/**
 * Role list page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, TableContainerComponent],
  selector: 'app-role-list-page',
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
export class RoleListPageComponent {
  breadcrumbs = [{ label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root }, { label: 'Roles' }]
  entityName: RoutePathKey = 'role'
  title = 'Listado de roles'
  view = 'list'
}
