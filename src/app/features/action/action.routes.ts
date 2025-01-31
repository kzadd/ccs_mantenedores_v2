import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const ActionCreatePage = () =>
  import('./ui/pages/action-create.page.component').then(m => m.ActionCreatePageComponent)
const ActionEditPage = () =>
  import('./ui/pages/action-edit.page.component').then(m => m.ActionEditPageComponent)
const ActionListPage = () =>
  import('./ui/pages/action-list.page.component').then(m => m.ActionListPageComponent)
const ActionShowPage = () =>
  import('./ui/pages/action-show.page.component').then(m => m.ActionShowPageComponent)

/**
 * Action routes configuration.
 */
export const actionRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: ActionCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: ActionEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: ActionListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: ActionShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.action
  }
]
