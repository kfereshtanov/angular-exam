import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing-module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [CommonModule, FormsModule, SharedModule, UserRoutingModule],
  exports: [LoginComponent, RegisterComponent],
})
export class UserModule {}
