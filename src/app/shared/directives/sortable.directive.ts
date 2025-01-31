import { Directive, EventEmitter, Input, Output } from '@angular/core'

import { SortColumn, SortDirection, SortEvent } from '../types/sortable.types'

/**
 * Handles sorting behavior for table columns.
 * Allows toggling sort direction between ascending, descending and none.
 */
@Directive({
  host: {
    '(click)': 'rotate()',
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"'
  },
  selector: '[appSortable]'
})
export class SortableDirective<T> {
  @Input() direction: SortDirection = ''
  @Input({ alias: 'appSortable', required: true }) sortable: SortColumn<T> = ''
  @Output() sort = new EventEmitter<SortEvent<T>>()

  private _rotate: Record<string, SortDirection> = {
    '': 'asc',
    asc: 'desc',
    desc: ''
  }

  rotate() {
    this.direction = this._rotate[this.direction]

    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    })
  }
}
