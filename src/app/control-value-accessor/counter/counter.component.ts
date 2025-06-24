import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  imports: [MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CounterComponent,
    multi: true
  }]
})
export class CounterComponent implements ControlValueAccessor {
  counter = 0;
  isDisabled = false;

  onChange: (value: number) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: number): void {
    this.counter = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  protected increment(): void {
    this.counter++;
    this.onChange(this.counter);
    this.onTouched();
  }
  protected decrement(): void {
    this.counter--;
    this.onChange(this.counter);
    this.onTouched();
  }
}
