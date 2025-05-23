import { Component, contentChild, input } from '@angular/core';
import { CardItemTitleComponent } from '../card-item-title/card-item-title.component';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.sass'
})
export class CardItemComponent {
  title = input.required();
  content = contentChild(CardItemTitleComponent)

  ngAfterViewInit() {
    console.log(this.content());
  }
}
