import { ChangeDetectionStrategy, Component } from '@angular/core'
import { lucideHash } from '@ng-icons/lucide'

import { CrudDetailComponent, CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

const USER_SHOW_ICONS = {
  idIcon: lucideHash
}

/**
 * User show page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudDetailComponent, CrudHeadingComponent],
  selector: 'app-user-show-page',
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
export class UserShowPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Usuarios', path: FULL_ROUTE_PATHS.dashboard.user.list },
    { label: 'Detalles del usuario' }
  ]

  details = [
    { icon: USER_SHOW_ICONS.idIcon, label: 'Id', value: '00001' },
    { label: 'Nombre', value: 'Ricardo' },
    { label: 'Apellido', value: 'Carrasquero' }
  ]

  entityName: RoutePathKey = 'user'
  title = 'Detalles y características del usuario'
  view = 'show'
}
