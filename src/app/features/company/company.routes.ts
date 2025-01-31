import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const CompanyPage = () => import('./company.page.component').then(m => m.CompanyPageComponent)

/**
 * Company routes configuration.
 */
export const companyRoutes: Routes = [
  {
    children: [
      {
        loadComponent: CompanyPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.company
  }
]
