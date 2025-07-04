import { Component, ElementRef, QueryList, signal, viewChild, ViewChildren, viewChildren } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { CardItemTitleComponent } from './card-item-title/card-item-title.component';
import { CardItemTitleIconComponent } from "./card-item-title-icon/card-item-title-icon.component";

@Component({
  selector: 'app-content-projection',
  imports: [CardItemComponent, CardItemTitleComponent, CardItemTitleIconComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.sass'
})
export class ContentProjectionComponent {
  cardItems = viewChildren(CardItemComponent, { read: ElementRef });
  @ViewChildren(CardItemComponent) cardItemsDecorator = QueryList<CardItemComponent>;
  button = viewChild<ElementRef<HTMLButtonElement>>('button');
  items = signal([
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' },
    { title: 'Item 4', description: 'Description 4' },
    { title: 'Item 5', description: 'Description 5' },
    { title: 'Item 6', description: 'Description 6' },
    { title: 'Item 7', description: 'Description 7' },
  ]);

  ngAfterViewInit() {
    console.log(this.cardItems());
    // console.log(this.button());
    // console.log(this.cardItemsDecorator);
  }
}
