import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const CountryCreatePage = () =>
  import('./ui/pages/country-create.page.component').then(m => m.CountryCreatePageComponent)
const CountryEditPage = () =>
  import('./ui/pages/country-edit.page.component').then(m => m.CountryEditPageComponent)
const CountryListPage = () =>
  import('./ui/pages/country-list.page.component').then(m => m.CountryListPageComponent)
const CountryShowPage = () =>
  import('./ui/pages/country-show.page.component').then(m => m.CountryShowPageComponent)

/**
 * Country routes configuration.
 */
export const countryRoutes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.list
      },
      {
        loadComponent: CountryCreatePage,
        path: ROUTE_PATHS.create
      },
      {
        loadComponent: CountryEditPage,
        path: ROUTE_PATHS.edit
      },
      {
        loadComponent: CountryListPage,
        path: ROUTE_PATHS.list
      },
      {
        loadComponent: CountryShowPage,
        path: ROUTE_PATHS.show
      }
    ],
    path: ROUTE_PATHS.country
  }
]
