import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const UserCreatePage = () =>
  import('./ui/pages/user-create.page.component').then(m => m.UserCreatePageComponent)
const UserEditPage = () =>
  import('./ui/pages/user-edit.page.component').then(m => m.UserEditPageComponent)
const UserListPage = () =>
  import('./ui/pages/user-list.page.component').then(m => m.UserListPageComponent)
const UserShowPage = () =>
  import('./ui/pages/user-show.page.component').then(m => m.UserShowPageComponent)

/**
 * Country routes configuration.
 */
export const userRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: UserCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: UserEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: UserListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: UserShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.user
  }
]
