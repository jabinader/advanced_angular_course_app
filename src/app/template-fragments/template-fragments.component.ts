import { V } from '@angular/cdk/keycodes';
import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-fragments',
  imports: [NgTemplateOutlet],
  templateUrl: './template-fragments.component.html',
  styleUrl: './template-fragments.component.sass'
})
export class TemplateFragmentsComponent {
  templateReference = viewChild<TemplateRef<any>>('myTemplate');

  constructor(private viewContainerRef: ViewContainerRef) {}
  ngAfterViewInit() {
    console.log(this.templateReference());
  }

  protected renderTemplate(): void {
    this.viewContainerRef.createEmbeddedView(this.templateReference()!, { name: 'Angular' });
  }
}
