import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const RoleCreatePage = () =>
  import('./ui/pages/role-create.page.component').then(m => m.RoleCreatePageComponent)
const RoleEditPage = () =>
  import('./ui/pages/role-edit.page.component').then(m => m.RoleEditPageComponent)
const RoleListPage = () =>
  import('./ui/pages/role-list.page.component').then(m => m.RoleListPageComponent)
const RoleShowPage = () =>
  import('./ui/pages/role-show.page.component').then(m => m.RoleShowPageComponent)

/**
 * Role routes configuration.
 */
export const roleRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: RoleCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: RoleEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: RoleListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: RoleShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.role
  }
]
