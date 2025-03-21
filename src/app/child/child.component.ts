import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Enables onPush
})
export class ChildComponent {
  @Input() data!: string;
  

}
