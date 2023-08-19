import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DEFAUL_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  appEmailDomains = DEFAUL_EMAIL_DOMAINS;
  passwordValue: string = '';
  username: string = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  updatePasswordValue(inputValue: string) {
    this.passwordValue = inputValue;
  }

  register(form: NgForm): void {
    const value: {
      username: string;
      email: string;
      password: string;
    } = form.value;

    this.authService.register(value.username, value.email, value.password);
  }
}
