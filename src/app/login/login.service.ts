import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = signal<UserModel[]>([
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'jad', password: 'jad' },
  ]);

  constructor(private readonly authService: AuthService) { }

  public login(username: string | null, password: string | null): Observable<boolean> {
    const user = this.users().find(user => user.username === username && user.password === password);
    this.authService.saveUser(user);
    return of(user !== undefined);
  }
}
