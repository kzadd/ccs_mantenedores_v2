import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideText } from '@ng-icons/lucide'

import { DetailItem } from '@app/shared/types/components/crud.types'

const DETAIL_ICONS = {
  defaultIcon: lucideText
}

/**
 * Crud detail component.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  selector: 'app-crud-detail',
  styleUrl: './crud-detail.component.scss',
  templateUrl: './crud-detail.component.html',
  viewProviders: [provideIcons(DETAIL_ICONS)]
})
export class CrudDetailComponent {
  @Input({ required: true }) details!: DetailItem[]
}
