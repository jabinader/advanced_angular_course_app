import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-control-value-accessor',
  imports: [ReactiveFormsModule, CounterComponent, MatButtonModule],
  templateUrl: './control-value-accessor.component.html',
  styleUrl: './control-value-accessor.component.sass'
})
export class ControlValueAccessorComponent {
  counterForm = new FormGroup({
    counter: new FormControl({ value: 1, disabled: false })
  });

  protected onSubmit(): void {
    console.log(this.counterForm.value);
    this.counterForm.controls.counter.disable();
  }
}
