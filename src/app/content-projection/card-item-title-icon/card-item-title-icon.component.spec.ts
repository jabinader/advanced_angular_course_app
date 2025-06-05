import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemTitleIconComponent } from './card-item-title-icon.component';

describe('CardItemTitleIconComponent', () => {
  let component: CardItemTitleIconComponent;
  let fixture: ComponentFixture<CardItemTitleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemTitleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemTitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
