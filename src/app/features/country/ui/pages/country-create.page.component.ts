import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

/**
 * Country create page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent],
  selector: 'app-country-create-page',
  template: `<app-crud-heading
    [breadcrumbs]="breadcrumbs"
    [entityName]="entityName"
    [title]="title"
    [view]="view"
  />`
})
export class CountryCreatePageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Países', path: FULL_ROUTE_PATHS.dashboard.country.list },
    { label: 'Crear país' }
  ]

  entityName: RoutePathKey = 'country'
  title = 'Crear nuevo país'
  view = 'create'
}
