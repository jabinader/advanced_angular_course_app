import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  incorrectCredentials = signal(false);
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  });

  constructor(private readonly loginService: LoginService, 
              private route: Router) {}

  protected onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.getRawValue();
      this.loginService.login(credentials.username, credentials.password).subscribe((isLoggedIn) => {
        this.incorrectCredentials.set(!false);
        if (isLoggedIn) {
          this.route.navigate(['']);
        }
      })
    }
  }
}
