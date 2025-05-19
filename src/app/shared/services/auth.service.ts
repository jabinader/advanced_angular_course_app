import { Injectable, signal } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser = signal<UserModel | undefined>(undefined);
  
  constructor() { }

  public saveUser(user: UserModel | undefined): void {
    this.loggedInUser.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public checkIfUserIsLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }
}
