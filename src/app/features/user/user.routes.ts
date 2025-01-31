import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const UserPage = () => import('./user.page.component').then(m => m.UserPageComponent)

/**
 * User routes configuration.
 */
export const userRoutes: Routes = [
  {
    children: [
      {
        loadComponent: UserPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.user
  }
]
