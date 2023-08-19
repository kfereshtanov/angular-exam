import { Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

import { passwordValidator } from './password-validator';

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
export class PasswordDirective implements Validator, OnChanges {
  @Input() appPassword: string = '';

  validator: ValidatorFn = () => null;

  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPasswordChanges = changes['appPassword'];

    if (currentPasswordChanges) {
      this.validator = passwordValidator(currentPasswordChanges.currentValue);
    }
  }
}
