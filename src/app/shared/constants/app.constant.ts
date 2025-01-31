import { ROUTE_PATHS } from './routes.constant'

const buildCrudRoutes = (basePath: string) => ({
  create: `/${ROUTE_PATHS.dashboard}/${basePath}/${ROUTE_PATHS.create}`,
  edit: `/${ROUTE_PATHS.dashboard}/${basePath}/${ROUTE_PATHS.edit}`,
  list: `/${ROUTE_PATHS.dashboard}/${basePath}/${ROUTE_PATHS.list}`,
  root: `/${ROUTE_PATHS.dashboard}/${basePath}`,
  show: `/${ROUTE_PATHS.dashboard}/${basePath}/${ROUTE_PATHS.show}`
})

export const FULL_ROUTE_PATHS = {
  auth: {
    login: `/${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`
  },
  dashboard: {
    action: buildCrudRoutes(ROUTE_PATHS.action),
    company: buildCrudRoutes(ROUTE_PATHS.company),
    country: buildCrudRoutes(ROUTE_PATHS.country),
    dealership: buildCrudRoutes(ROUTE_PATHS.dealership),
    functionality: buildCrudRoutes(ROUTE_PATHS.functionality),
    menu: buildCrudRoutes(ROUTE_PATHS.menu),
    role: buildCrudRoutes(ROUTE_PATHS.role),
    root: `/${ROUTE_PATHS.dashboard}`,
    user: buildCrudRoutes(ROUTE_PATHS.user)
  }
}

export const TOKEN_KEYS = {
  accessToken: 'access_token'
}
