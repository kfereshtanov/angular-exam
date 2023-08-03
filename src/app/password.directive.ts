import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDirective,
      multi: true,
    },
  ],
})
export class PasswordDirective {
  @Input() appPassword: string | undefined;
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regexp = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

    const isValid = new RegExp(regexp).test(control.value);
    if (isValid) return null;

    return {
      appPassword: this.appPassword,
    };
  }
}
