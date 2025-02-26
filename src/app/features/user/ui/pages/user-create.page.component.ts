import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { FormContainerComponent } from '../containers/form/form.container.component'

/**
 * User create page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, FormContainerComponent],
  selector: 'app-user-create-page',
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
export class UserCreatePageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Usuarios', path: FULL_ROUTE_PATHS.dashboard.user.list },
    { label: 'Crear usuario' }
  ]

  entityName: RoutePathKey = 'user'
  title = 'Crear nuevo usuario'
  view = 'create'
}
