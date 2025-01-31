import { Routes } from '@angular/router'

import { protectedRoute } from './core/guards/protected-route.guard'
import { actionRoutes } from './features/action/action.routes'
import { companyRoutes } from './features/company/company.routes'
import { countryRoutes } from './features/country/country.routes'
import { dealershipRoutes } from './features/dealership/dealership.routes'
import { functionalityRoutes } from './features/functionality/functionality.routes'
import { menuRoutes } from './features/menu/menu.routes'
import { roleRoutes } from './features/role/role.routes'
import { userRoutes } from './features/user/user.routes'
import { ROUTE_PATHS } from './shared/constants/routes.constant'

const BrandLayout = () =>
  import('./layouts/brand.layout.component').then(m => m.BrandLayoutComponent)
const DashboardPage = () => import('./features/dashboard').then(m => m.DashboardPage)
const LoginPage = () => import('./features/login').then(m => m.LoginPage)
const NotFoundPage = () => import('./features/not-found').then(m => m.NotFoundPage)

/**
 * Routes configuration.
 * This defines the routes and their associated components.
 */
export const routes: Routes = [
  {
    children: [
      {
        path: ROUTE_PATHS.root,
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.login
      },
      {
        loadComponent: LoginPage,
        path: ROUTE_PATHS.login
      }
    ],
    path: ROUTE_PATHS.auth
  },
  {
    path: ROUTE_PATHS.root,
    pathMatch: 'full',
    redirectTo: ROUTE_PATHS.dashboard
  },
  {
    canActivate: [protectedRoute],
    children: [
      {
        loadComponent: DashboardPage,
        path: ROUTE_PATHS.root,
        pathMatch: 'full'
      },
      ...actionRoutes,
      ...companyRoutes,
      ...countryRoutes,
      ...dealershipRoutes,
      ...functionalityRoutes,
      ...menuRoutes,
      ...roleRoutes,
      ...userRoutes
    ],
    loadComponent: BrandLayout,
    path: ROUTE_PATHS.dashboard
  },
  {
    loadComponent: NotFoundPage,
    path: ROUTE_PATHS.notFound
  }
]
