import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { FormContainerComponent } from '../containers/form/form.container.component'

/**
 * Role edit page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, FormContainerComponent],
  selector: 'app-role-edit-page',
  template: `
    <app-crud-heading
      [breadcrumbs]="breadcrumbs"
      [entityName]="entityName"
      [title]="title"
      [view]="view"
    />

    <app-form-container [view]="view" />
  `
})
export class RoleEditPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Roles', path: FULL_ROUTE_PATHS.dashboard.role.list },
    { label: 'Editar rol' }
  ]

  entityName: RoutePathKey = 'role'
  title = 'Editar datos del rol'
  view = 'edit'
}
