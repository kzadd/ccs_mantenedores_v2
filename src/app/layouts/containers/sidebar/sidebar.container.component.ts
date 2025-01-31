import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal
} from '@angular/core'
import { NavigationEnd, Router, RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import {
  lucideActivity,
  lucideBuilding2,
  lucideHouse,
  lucideMapPin,
  lucideMenu,
  lucideSettings2,
  lucideShield,
  lucideStore,
  lucideUser
} from '@ng-icons/lucide'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { ROUTE_PATHS } from '@app/shared/constants/routes.constant'
import { MenuItem, MenuPathKey } from '@app/shared/types/navigation.types'

const SIDEBAR_ICONS = {
  actionIcon: lucideActivity,
  companyIcon: lucideBuilding2,
  countryIcon: lucideMapPin,
  dealershipIcon: lucideStore,
  functionalityIcon: lucideSettings2,
  homeIcon: lucideHouse,
  menuIcon: lucideMenu,
  roleIcon: lucideShield,
  userIcon: lucideUser
}

/**
 * Sidebar container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, RouterLink],
  selector: 'app-sidebar-container',
  styleUrl: './sidebar.container.component.scss',
  templateUrl: './sidebar.container.component.html'
})
export class SidebarContainerComponent implements OnInit {
  private _router = inject(Router)

  @Input() sidebarCollapsed = false
  @Output() closeSidebar = new EventEmitter<void>()

  currentUrl = signal<string>(this._router.url)

  menuItems: MenuItem[] = [
    {
      icon: SIDEBAR_ICONS.homeIcon,
      label: 'Panel',
      namePath: 'dashboard',
      path: this._buildPath('dashboard')
    },
    {
      icon: SIDEBAR_ICONS.countryIcon,
      label: 'Paises',
      namePath: 'country',
      path: this._buildPath('country')
    },
    {
      icon: SIDEBAR_ICONS.companyIcon,
      label: 'Empresas',
      namePath: 'company',
      path: this._buildPath('company')
    },
    {
      icon: SIDEBAR_ICONS.dealershipIcon,
      label: 'Concesionarios',
      namePath: 'dealership',
      path: this._buildPath('dealership')
    },
    {
      icon: SIDEBAR_ICONS.userIcon,
      label: 'Usuarios',
      namePath: 'user',
      path: this._buildPath('user')
    },
    {
      icon: SIDEBAR_ICONS.roleIcon,
      label: 'Roles',
      namePath: 'role',
      path: this._buildPath('role')
    },
    {
      icon: SIDEBAR_ICONS.functionalityIcon,
      label: 'Funcionalidades',
      namePath: 'functionality',
      path: this._buildPath('functionality')
    },
    {
      icon: SIDEBAR_ICONS.menuIcon,
      label: 'Menu',
      namePath: 'menu',
      path: this._buildPath('menu')
    },
    {
      icon: SIDEBAR_ICONS.actionIcon,
      label: 'Acciones',
      namePath: 'action',
      path: this._buildPath('action')
    }
  ]

  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects)
      }
    })
  }

  private _buildPath(section: MenuPathKey): string {
    return section === ROUTE_PATHS.dashboard
      ? FULL_ROUTE_PATHS.dashboard.root
      : `${FULL_ROUTE_PATHS.dashboard.root}/${ROUTE_PATHS[section]}`
  }

  isRouteActive(namePath: string, path: string): boolean {
    const currentUrl = this.currentUrl()

    return currentUrl === path || currentUrl.split('/')[2] === namePath
  }

  handleCloseSidebar(): void {
    this.closeSidebar.emit()
  }
}
