import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const MenuCreatePage = () =>
  import('./ui/pages/menu-create.page.component').then(m => m.MenuCreatePageComponent)
const MenuEditPage = () =>
  import('./ui/pages/menu-edit.page.component').then(m => m.MenuEditPageComponent)
const MenuListPage = () =>
  import('./ui/pages/menu-list.page.component').then(m => m.MenuListPageComponent)
const MenuShowPage = () =>
  import('./ui/pages/menu-show.page.component').then(m => m.MenuShowPageComponent)

/**
 * Menu routes configuration.
 */
export const menuRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: MenuCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: MenuEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: MenuListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: MenuShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.menu
  }
]
