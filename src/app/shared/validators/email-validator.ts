import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStrings = domains.join('|'); // ['bg', 'com'] => bg|com
  const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`);

  return (control) => {
    const value = control.value;
    const regEx = regExp.test(value);
    return value === '' || regEx
      ? null
      : { appEmailValidator: true };
  };
}
