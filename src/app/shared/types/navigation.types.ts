import { ROUTE_PATHS } from '../constants/routes.constant'

export interface MenuItem {
  icon?: string
  label: string
  namePath: string
  path: string
}

export type MenuPathKey = keyof typeof ROUTE_PATHS
