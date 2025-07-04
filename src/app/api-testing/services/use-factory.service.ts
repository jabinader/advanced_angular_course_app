import { Injectable } from '@angular/core';

// @Injectable()
export class UseFactoryService {
	constructor(private isAdmin: boolean) {}

	public getIsAdmin(): boolean {
		return this.isAdmin
	}
}
