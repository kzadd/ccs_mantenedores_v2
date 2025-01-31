import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

/**
 * Dealership create page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent],
  selector: 'app-dealership-create-page',
  template: `<app-crud-heading
    [breadcrumbs]="breadcrumbs"
    [entityName]="entityName"
    [title]="title"
    [view]="view"
  />`
})
export class DealershipCreatePageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Concesionarios', path: FULL_ROUTE_PATHS.dashboard.dealership.list },
    { label: 'Crear concesionario' }
  ]

  entityName: RoutePathKey = 'dealership'
  title = 'Crear nuevo concesionario'
  view = 'create'
}
