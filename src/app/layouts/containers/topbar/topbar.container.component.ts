import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Router, RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircleUserRound, lucideLogOut, lucideMenu } from '@ng-icons/lucide'
import { Store } from '@ngrx/store'

import { loginFeature } from '@app/features/login'
import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { ResponsiveDirective } from '@app/shared/directives/responsive.directive'
import { deleteCookie } from '@app/shared/utils/cookie.utils'

const TOPBAR_ICONS = {
  logoutIcon: lucideLogOut,
  menuIcon: lucideMenu,
  userAccountIcon: lucideCircleUserRound
}

/**
 * Topbar container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, ResponsiveDirective, RouterLink],
  selector: 'app-topbar-container',
  styleUrl: './topbar.container.component.scss',
  templateUrl: './topbar.container.component.html',
  viewProviders: [provideIcons(TOPBAR_ICONS)]
})
export class TopbarContainerComponent implements OnInit {
  private _router = inject(Router)
  private _store = inject(Store)

  @Input() dropdownOpen = false
  @Output() toggleSidebar = new EventEmitter<void>()

  user = toSignal(this._store.select(loginFeature.selectUser), { initialValue: null })

  profileName = '...'

  ngOnInit(): void {
    const { lastname, name } = this.user() ?? {}

    if (lastname && name) {
      this.profileName = `${name} ${lastname}`
    }
  }

  handleLogout(): void {
    deleteCookie(TOKEN_KEYS.accessToken)
    this._router.navigate([FULL_ROUTE_PATHS.auth.login])
  }

  handleProfileHover(isHovered: boolean): void {
    this.dropdownOpen = isHovered
  }

  handleToggleSidebar(): void {
    this.toggleSidebar.emit()
  }
}
