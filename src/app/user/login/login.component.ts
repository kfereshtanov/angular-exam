import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAUL_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  appEmailDomains = DEFAUL_EMAIL_DOMAINS;

  ngOnInit(): void {}

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const value: { email: string; password: string } = form.value;
  }
}
