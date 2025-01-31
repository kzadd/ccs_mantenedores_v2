import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const DealershipCreatePage = () =>
  import('./ui/pages/dealership-create.page.component').then(m => m.DealershipCreatePageComponent)
const DealershipEditPage = () =>
  import('./ui/pages/dealership-edit.page.component').then(m => m.DealershipEditPageComponent)
const DealershipListPage = () =>
  import('./ui/pages/dealership-list.page.component').then(m => m.DealershipListPageComponent)
const DealershipShowPage = () =>
  import('./ui/pages/dealership-show.page.component').then(m => m.DealershipShowPageComponent)

/**
 * Dealership routes configuration.
 */
export const dealershipRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: DealershipCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: DealershipEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: DealershipListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: DealershipShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.dealership
  }
]
