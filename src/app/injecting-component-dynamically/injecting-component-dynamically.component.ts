import { Component, signal, ViewContainerRef } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-injecting-component-dynamically',
  imports: [NgComponentOutlet],
  templateUrl: './injecting-component-dynamically.component.html',
  styleUrl: './injecting-component-dynamically.component.sass'
})
export class InjectingComponentDynamicallyComponent {
  isAdmin = signal(false);

  constructor(private viewContainerRef: ViewContainerRef) {}
  protected injectComponent(): any {
    return this.isAdmin() ? AdminComponent: UserComponent;
  }

  protected changeUserType(): void {
    this.isAdmin.update(value => !value)
  }

  protected injectComponentUsingViewContainerRef(): void {
    this.viewContainerRef.createComponent(AdminComponent)
  }
}
