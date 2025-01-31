import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

/**
 * Company edit page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent],
  selector: 'app-company-edit-page',
  template: `<app-crud-heading
    [breadcrumbs]="breadcrumbs"
    [entityName]="entityName"
    [title]="title"
    [view]="view"
  />`
})
export class CompanyEditPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Empresas', path: FULL_ROUTE_PATHS.dashboard.company.list },
    { label: 'Editar empresa' }
  ]

  entityName: RoutePathKey = 'company'
  title = 'Editar datos de la empresa'
  view = 'edit'
}
