import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export const ValidateIsEmailValid = (control: AbstractControl) => {
  if (!/^[a-z0-9\.]+@[a-z0-9\.]+\.+[a-z]+$/.test(control.value)) {
    return { validEmail: true }; // bad
  }
  return null
}

export const ValidateIsUrlValid = (control: AbstractControl) => {
  if (!control.value.startsWith('http')) {
    return { validUrl: true }; // bad
  }
  return null
}

export const ValidateIsPasswordMatch = (control: AbstractControl) => {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;
  if (password !== confirmPassword) {
    return control.get('confirmPassword').setErrors({ matchPassword: true })
  }
  return null
}
