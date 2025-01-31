import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const DealershipPage = () =>
  import('./dealership.page.component').then(m => m.DealershipPageComponent)

/**
 * Dealership routes configuration.
 */
export const dealershipRoutes: Routes = [
  {
    children: [
      {
        loadComponent: DealershipPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.dealership
  }
]
