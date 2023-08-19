import { ValidatorFn } from '@angular/forms';

export function passwordValidator(value: string): ValidatorFn {
  const regexp =
    '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$';

  return (control) => {
    const value = control.value;

    console.log(value);
    const regEx = new RegExp(regexp).test(value);

    console.log(regEx);

    return value === '' || regEx ? null : { appPasswordValidator: true };
  };
}
