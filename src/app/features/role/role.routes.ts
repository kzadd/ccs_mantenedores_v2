import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const RolePage = () => import('./role.page.component').then(m => m.RolePageComponent)

/**
 * Role routes configuration.
 */
export const roleRoutes: Routes = [
  {
    children: [
      {
        loadComponent: RolePage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.role
  }
]
