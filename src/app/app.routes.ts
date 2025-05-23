import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
	{ path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
	{ path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [authGuard],
		children: [
			{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
			{ path: 'tasks', loadComponent: () => import('./task/task-list/task-list.component').then(m => m.TaskListComponent) },
			{ path: 'content-projection', loadComponent: () => import('./content-projection/content-projection.component').then(m => m.ContentProjectionComponent) },
		]
	 },
];
