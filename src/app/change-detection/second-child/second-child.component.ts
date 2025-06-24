import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-second-child',
  imports: [],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondChildComponent {
 arr = new Array(2000).fill(0);
}
