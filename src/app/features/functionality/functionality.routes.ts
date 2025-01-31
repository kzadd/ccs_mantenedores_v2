import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const FunctionalityCreatePage = () =>
  import('./ui/pages/functionality-create.page.component').then(
    m => m.FunctionalityCreatePageComponent
  )
const FunctionalityEditPage = () =>
  import('./ui/pages/functionality-edit.page.component').then(m => m.FunctionalityEditPageComponent)
const FunctionalityListPage = () =>
  import('./ui/pages/functionality-list.page.component').then(m => m.FunctionalityListPageComponent)
const FunctionalityShowPage = () =>
  import('./ui/pages/functionality-show.page.component').then(m => m.FunctionalityShowPageComponent)

/**
 * Functionality routes configuration.
 */
export const functionalityRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: FunctionalityCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: FunctionalityEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: FunctionalityListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: FunctionalityShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.functionality
  }
]
