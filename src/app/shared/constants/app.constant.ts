import { ROUTE_PATHS } from './routes.constant'

export const FULL_ROUTE_PATHS = {
  auth: {
    login: `/${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`
  },
  dashboard: {
    actions: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.actions}`,
    company: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.company}`,
    country: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}`,
    dealership: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.dealership}`,
    functionality: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.functionality}`,
    menu: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.menu}`,
    role: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.role}`,
    root: `/${ROUTE_PATHS.dashboard}`,
    user: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.user}`
  }
}

export const TOKEN_KEYS = {
  accessToken: 'access_token'
}
