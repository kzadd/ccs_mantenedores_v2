import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const FunctionalityPage = () =>
  import('./functionality.page.component').then(m => m.FunctionalityPageComponent)

/**
 * Functionality routes configuration.
 */
export const functionalityRoutes: Routes = [
  {
    children: [
      {
        loadComponent: FunctionalityPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.functionality
  }
]
