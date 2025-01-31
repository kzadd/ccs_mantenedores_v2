import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CrudHeadingComponent } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { RoutePathKey } from '@app/shared/types/route.types'
import { FormContainerComponent } from '../containers/form/form.container.component'

/**
 * Menu create page.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrudHeadingComponent, FormContainerComponent],
  selector: 'app-menu-create-page',
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
export class MenuCreatePageComponent {
  breadcrumbs = [
    { label: 'Panel', path: FULL_ROUTE_PATHS.dashboard.root },
    { label: 'Menús', path: FULL_ROUTE_PATHS.dashboard.menu.list },
    { label: 'Crear menú' }
  ]

  entityName: RoutePathKey = 'menu'
  title = 'Crear nuevo menú'
  view = 'create'
}
