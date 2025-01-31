import { ChangeDetectionStrategy, Component } from '@angular/core'
import { lucideHash } from '@ng-icons/lucide'

import { CrudDetailComponent, CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

const ROLE_SHOW_ICONS = {
  idIcon: lucideHash
}

/**
 * Role show page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudDetailComponent, CrudHeadingComponent],
  selector: 'app-role-show-page',
  template: `
    <app-crud-heading
      [breadcrumbs]="breadcrumbs"
      [entityName]="entityName"
      [title]="title"
      [view]="view"
    />

    <app-crud-detail [details]="details" />
  `
})
export class RoleShowPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Roles', path: FULL_ROUTE_PATHS.dashboard.role.list },
    { label: 'Detalles del rol' }
  ]

  details = [
    { icon: ROLE_SHOW_ICONS.idIcon, label: 'Id', value: '00001' },
    { label: 'Nombre', value: 'Ricardo' },
    { label: 'Apellido', value: 'Carrasquero' }
  ]

  entityName: RoutePathKey = 'role'
  title = 'Detalles y características del rol'
  view = 'show'
}
