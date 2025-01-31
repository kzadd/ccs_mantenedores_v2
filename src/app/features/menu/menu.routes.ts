import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const MenuPage = () => import('./menu.page.component').then(m => m.MenuPageComponent)

/**
 * Menu routes configuration.
 */
export const menuRoutes: Routes = [
  {
    children: [
      {
        loadComponent: MenuPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.menu
  }
]
