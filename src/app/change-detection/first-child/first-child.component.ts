import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
	selector: 'app-first-child',
	imports: [SecondChildComponent],
	templateUrl: './first-child.component.html',
	styleUrl: './first-child.component.sass',
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstChildComponent {
	arr = new Array(1000).fill(0);
}
