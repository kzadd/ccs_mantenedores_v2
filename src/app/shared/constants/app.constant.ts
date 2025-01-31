import { ROUTE_PATHS } from './routes.constant'

export const FULL_ROUTE_PATHS = {
  auth: {
    login: `/${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`
  },
  dashboard: {
    action: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.action}`,
    company: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.company}`,
    country: {
      create: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}/${ROUTE_PATHS.create}`,
      edit: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}/${ROUTE_PATHS.edit}`,
      list: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}/${ROUTE_PATHS.list}`,
      root: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}`,
      show: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.country}/${ROUTE_PATHS.show}`
    },
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
