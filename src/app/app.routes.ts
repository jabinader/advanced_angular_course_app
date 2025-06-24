import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
	{ path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
	{ path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [authGuard], data: { preload: true },
		children: [
			{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
			{ path: 'tasks', loadComponent: () => import('./task/task-list/task-list.component').then(m => m.TaskListComponent), data: { preload: true } },	
			{ path: 'content-projection', loadComponent: () => import('./content-projection/content-projection.component').then(m => m.ContentProjectionComponent), data: { preload: true } },
			{ path: 'dynamic-component-injection', loadComponent: () => import('./injecting-component-dynamically/injecting-component-dynamically.component').then(m => m.InjectingComponentDynamicallyComponent), data: { preload: true } },
			{ path: 'template-fragments', loadComponent: () => import('./template-fragments/template-fragments.component').then(m => m.TemplateFragmentsComponent), data: { preload: true } },
			{ path: 'change-detection', loadComponent: () => import('./change-detection/change-detection.component').then(m => m.ChangeDetectionComponent) },
			{ path: 'control-value-accessor', loadComponent: () => import('./control-value-accessor/control-value-accessor.component').then(m => m.ControlValueAccessorComponent) },
		]
	 },
];
