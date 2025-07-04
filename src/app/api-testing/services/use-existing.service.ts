import { Injectable } from '@angular/core';
import { BaseClass } from '../models/base-class.model';

@Injectable()
export class UseExistingService implements BaseClass {
	isAdmin = false;
	
	constructor() {}

	public getIsAdmin(): boolean {
		return this.isAdmin
	}
}
