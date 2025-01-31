import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const ActionPage = () => import('./action.page.component').then(m => m.ActionPageComponent)

/**
 * Action routes configuration.
 */
export const actionRoutes: Routes = [
  {
    children: [
      {
        loadComponent: ActionPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.action
  }
]
