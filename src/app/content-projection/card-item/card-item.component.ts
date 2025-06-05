import { Component, ContentChild, contentChild, ContentChildren, input, signal } from '@angular/core';
import { CardItemTitleComponent } from '../card-item-title/card-item-title.component';
import { CardItemTitleIconComponent } from '../card-item-title-icon/card-item-title-icon.component';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.sass'
})
export class CardItemComponent {
  title = input.required();
  content = contentChild(CardItemTitleIconComponent, {descendants: false});
  @ContentChild(CardItemTitleComponent, {static: true}) titleComponent!: CardItemTitleComponent;
  test = signal('test');

  ngAfterViewInit() {
    // console.log(this.content());
    // console.log(this.titleComponent);
  }
}
