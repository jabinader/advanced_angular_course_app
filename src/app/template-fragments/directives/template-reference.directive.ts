import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateReference]'
})
export class TemplateReferenceDirective {

  constructor(templateRef: TemplateRef<any>) { }

}
