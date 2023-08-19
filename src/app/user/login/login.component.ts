import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DEFAUL_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  appEmailDomains = DEFAUL_EMAIL_DOMAINS;
  passwordValue: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/profile']);
    }
  }

  updatePasswordValue(inputValue: string) {
    this.passwordValue = inputValue;
  }

  resetPasswordValue() {
    this.passwordValue = '';
  }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const value: {
      email: string;
      password: string;
    } = form.value;

    this.authService.login(value.email, value.password);
  }
}
