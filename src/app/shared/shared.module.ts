import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { PasswordDirective } from './validators/password.directive';
import { MatchPasswordDirective } from './validators/match-password.directive';

@NgModule({
  declarations: [EmailDirective, PasswordDirective, MatchPasswordDirective],
  imports: [CommonModule],
  exports: [EmailDirective, PasswordDirective, MatchPasswordDirective],
})
export class SharedModule {}
