import { ChangeDetectionStrategy, Component } from '@angular/core'
import { lucideHash } from '@ng-icons/lucide'

import { CrudDetailComponent, CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

const ACTION_SHOW_ICONS = {
  idIcon: lucideHash
}

/**
 * Action show page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudDetailComponent, CrudHeadingComponent],
  selector: 'app-action-show-page',
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
export class ActionShowPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Acciones', path: FULL_ROUTE_PATHS.dashboard.action.list },
    { label: 'Detalles de la acción' }
  ]

  details = [
    { icon: ACTION_SHOW_ICONS.idIcon, label: 'Id', value: '00001' },
    { label: 'Nombre', value: 'Ricardo' },
    { label: 'Apellido', value: 'Carrasquero' }
  ]

  entityName: RoutePathKey = 'action'
  title = 'Detalles y características de la acción'
  view = 'show'
}
