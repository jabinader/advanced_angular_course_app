import { Component } from '@angular/core';
import { FirstChildComponent } from './first-child/first-child.component';

@Component({
	selector: 'app-change-detection',
	imports: [FirstChildComponent],
	templateUrl: './change-detection.component.html',
	styleUrl: './change-detection.component.sass'
})
export class ChangeDetectionComponent {

	protected btnClicked(): void {
		console.log('Button clicked');
	}
}
