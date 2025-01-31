import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const CompanyCreatePage = () =>
  import('./ui/pages/company-create.page.component').then(m => m.CompanyCreatePageComponent)
const CompanyEditPage = () =>
  import('./ui/pages/company-edit.page.component').then(m => m.CompanyEditPageComponent)
const CompanyListPage = () =>
  import('./ui/pages/company-list.page.component').then(m => m.CompanyListPageComponent)
const CompanyShowPage = () =>
  import('./ui/pages/company-show.page.component').then(m => m.CompanyShowPageComponent)

/**
 * Company routes configuration.
 */
export const companyRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: CompanyCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: CompanyEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: CompanyListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: CompanyShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.company
  }
]
