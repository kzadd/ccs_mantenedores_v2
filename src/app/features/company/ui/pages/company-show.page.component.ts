import { ChangeDetectionStrategy, Component } from '@angular/core'
import { lucideHash } from '@ng-icons/lucide'

import { CrudDetailComponent, CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'

const COMPANY_SHOW_ICONS = {
  idIcon: lucideHash
}

/**
 * Company show page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudDetailComponent, CrudHeadingComponent],
  selector: 'app-company-show-page',
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
export class CompanyShowPageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Empresas', path: FULL_ROUTE_PATHS.dashboard.company.list },
    { label: 'Detalles de la empresa' }
  ]

  details = [
    { icon: COMPANY_SHOW_ICONS.idIcon, label: 'Id', value: '00001' },
    { label: 'Nombre', value: 'Ricardo' },
    { label: 'Apellido', value: 'Carrasquero' }
  ]

  entityName: RoutePathKey = 'company'
  title = 'Detalles y características de la empresa'
  view = 'show'
}
