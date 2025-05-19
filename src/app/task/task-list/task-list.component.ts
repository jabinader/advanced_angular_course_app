import { Component, computed, effect, Inject, Injector, linkedSignal, signal, untracked } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
	selector: 'app-task-list',
	imports: [],
	templateUrl: './task-list.component.html',
	styleUrl: './task-list.component.sass'
})
export class TaskListComponent {
 
	//Normal signal
	normalSignal = signal(0);

	//Computed signal
	signalForComputed = signal(0);
	conditionalSignal = signal(false);
	signalToUntrack = signal(0);
	computedSignal = computed(() => {
		if (this.conditionalSignal()) {
			console.log('Untracked Signal:', untracked(this.signalToUntrack) );
			
			return this.signalForComputed() * 2;
		} else {
			return 'Nothing Changed';
		}
	})
 
	//Effect signal
	conditionalSignalForEffect = signal(false);
	signalForEffect = signal(0);
	effect: any = null;

	//Signal to test equality
	signalToTestEquality = signal<UserModel>({id: '1', name: 'John Doe'}, { equal: (prev, next) => prev.id === next.id });

	//Linked signals
	paymentOptionsSignal = signal(['Credit Card', 'Debit Card', 'cash']);
	option = linkedSignal<string[], string>({
		source: this.paymentOptionsSignal,
		computation: (newOption, previous) => {			
			return (
				newOption.find((opt: any) => opt === previous?.value) ?? newOption[0]
			);
		}

	})

	constructor(private injector: Injector) {
		// effect(() => {
		// 	if (this.conditionalSignalForEffect()) {
		// 		console.log(this.signalForEffect());
		// 	} else {
		// 		console.log('Nothing Changed');
		// 	}
		// })
	}
	
	ngOnInit() {
		this.option.set(this.paymentOptionsSignal()[0]);
		this.effect = effect(() => {
			if (this.conditionalSignalForEffect()) {
				console.log(this.signalForEffect());
			} else {
				console.log('Nothing Changed');
			}
		}, { injector: this.injector });
	}

	protected updateNormalSignal() {
		// this.normalSignal.set(1);
		this.normalSignal.update((value) => value + 1);
	}

	protected updateSignalForComputed() {
		this.conditionalSignal.update((value) => !value);
		this.signalForComputed.update((value) => value + 1);
	}

	protected updateUntrackedSignal() {
		this.signalToUntrack.update((value) => value + 1);
	}
	
	protected updateSignalForEffect() {
		this.conditionalSignalForEffect.update((value) => !value);
		this.signalForEffect.update((value) => value + 1);
	}

	protected updateSignalToTestEquality() {
		// this.signalToTestEquality.update((value) => {
		// 	return { id: '1', name: 'test' };
		// });

		this.signalToTestEquality.set({ id: '2', name: 'Jane Doe' });
	}

	protected logSelectedSignal() {
		console.log(this.option());
	}

	protected updatePaymentOptions() {
		// this.paymentOptionsSignal.update((value) => {
		// 	return [...value, 'Bank Transfer'];
		// });
		// this.paymentOptionsSignal.set(['Bank Transfer', 'Credit Card', 'Debit Card', 'cash'] );
		this.paymentOptionsSignal.set(['Bank Transfer', 'Debit Card', 'cash'] );
	}
}
