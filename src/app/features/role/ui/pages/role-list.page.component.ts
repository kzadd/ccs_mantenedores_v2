import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

/**
 * Role list page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent],
  selector: 'app-role-list-page',
  template: `<app-crud-heading
    [breadcrumbs]="breadcrumbs"
    [entityName]="entityName"
    [title]="title"
    [view]="view"
  />`
})
export class RoleListPageComponent {
  breadcrumbs = [{ label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root }, { label: 'Roles' }]
  entityName: RoutePathKey = 'role'
  title = 'Listado de roles'
  view = 'list'
}
