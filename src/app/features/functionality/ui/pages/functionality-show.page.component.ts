import { ChangeDetectionStrategy, Component } from '@angular/core'
import { lucideHash } from '@ng-icons/lucide'

import { CrudDetailComponent, CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

const FUNCTIONALITY_SHOW_ICONS = {
  idIcon: lucideHash
}

/**
 * Functionality show page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudDetailComponent, CrudHeadingComponent],
  selector: 'app-functionality-show-page',
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
export class FunctionalityShowPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Funcionalidades', path: FULL_ROUTE_PATHS.dashboard.functionality.list },
    { label: 'Detalles de la funcionalidad' }
  ]

  details = [
    { icon: FUNCTIONALITY_SHOW_ICONS.idIcon, label: 'Id', value: '00001' },
    { label: 'Nombre', value: 'Ricardo' },
    { label: 'Apellido', value: 'Carrasquero' }
  ]

  entityName: RoutePathKey = 'functionality'
  title = 'Detalles y características de la funcionalidad'
  view = 'show'
}
