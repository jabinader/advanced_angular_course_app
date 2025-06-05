import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectingComponentDynamicallyComponent } from './injecting-component-dynamically.component';

describe('InjectingComponentDynamicallyComponent', () => {
  let component: InjectingComponentDynamicallyComponent;
  let fixture: ComponentFixture<InjectingComponentDynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectingComponentDynamicallyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectingComponentDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
