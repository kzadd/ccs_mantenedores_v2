import { Routes } from '@angular/router'

import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'

const CountryPage = () => import('./country.page.component').then(m => m.CountryPageComponent)

/**
 * Country routes configuration.
 */
export const countryRoutes: Routes = [
  {
    children: [
      {
        loadComponent: CountryPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      }
    ],
    path: ROUTE_PATHS.country
  }
]
