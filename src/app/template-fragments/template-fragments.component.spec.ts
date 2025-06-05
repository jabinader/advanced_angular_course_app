import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFragmentsComponent } from './template-fragments.component';

describe('TemplateFragmentsComponent', () => {
  let component: TemplateFragmentsComponent;
  let fixture: ComponentFixture<TemplateFragmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFragmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
