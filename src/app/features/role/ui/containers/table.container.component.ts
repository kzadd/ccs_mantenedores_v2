import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideEye, lucidePencil } from '@ng-icons/lucide'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'

interface Role {
  id: string
  name: string
}

type TableData<T> = {
  [Property in keyof T]: T[Property]
}

interface TableHeader<T> {
  key: TableDataKey<T>
  label: string
}

type TableDataKey<T> = Extract<keyof T, string>

const TABLE_ICONS = {
  editIcon: lucidePencil,
  viewIcon: lucideEye
}

/**
 * Table container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  selector: 'app-table-container',
  styleUrl: './table.container.component.scss',
  templateUrl: './table.container.component.html',
  viewProviders: [provideIcons(TABLE_ICONS)]
})
export class TableContainerComponent {
  private _router = inject(Router)

  data: TableData<Role>[] = [
    { id: '0001', name: 'Opcion 1' },
    { id: '0002', name: 'Opcion 2' },
    { id: '0003', name: 'Opcion 3' },
    { id: '0004', name: 'Opcion 4' }
  ]

  headers: TableHeader<Role>[] = [
    { key: 'id', label: '#' },
    { key: 'name', label: 'Nombre' }
  ]

  handleShow(item: Role): void {
    this._router.navigate([FULL_ROUTE_PATHS.dashboard.role.show.replace(':id', item.id.toString())])
  }

  handleEdit(item: Role): void {
    this._router.navigate([FULL_ROUTE_PATHS.dashboard.role.edit.replace(':id', item.id.toString())])
  }
}
