import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemTitleComponent } from './card-item-title.component';

describe('CardItemTitleComponent', () => {
  let component: CardItemTitleComponent;
  let fixture: ComponentFixture<CardItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
