import { AbstractControl } from '@angular/forms';

export function notNullOrBlank(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control.value !== null && control.value.trim() === '') {
    return { blankOrNull: true };
  }
  return null;
}

export function isImage(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control.value !== '' && !verifyImage(control.value.type)) {
    return { invalidImageType: true };
  }
  return null;
}

const verifyImage = (type: string): boolean => {
  const types = ['image/png', 'image/jpg'];
  return types.includes(type);
};
