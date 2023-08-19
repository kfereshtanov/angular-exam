import { Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input() appMatchPassword: string = '';

  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    const inputValue = control.value;

    if (inputValue !== this.appMatchPassword) {
      return { matchPasswordValidator: true };
    }
    return null;
  }
}
