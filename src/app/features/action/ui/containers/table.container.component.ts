import { ChangeDetectionStrategy, Component } from '@angular/core'

interface Action {
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

/**
 * Table container.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-table-container',
  styleUrl: './table.container.component.scss',
  templateUrl: './table.container.component.html'
})
export class TableContainerComponent {
  data: TableData<Action>[] = [
    { id: '1', name: 'Crear' },
    { id: '2', name: 'Editar' },
    { id: '3', name: 'Eliminar' },
    { id: '4', name: 'Actualizar' }
  ]

  headers: TableHeader<Action>[] = [
    { key: 'id', label: '#' },
    { key: 'name', label: 'Nombre' }
  ]
}
