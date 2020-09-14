import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isInvalid (formControlName: AbstractControl): boolean {
    return ( formControlName.dirty || formControlName.touched) && formControlName.invalid;
  }

  isValid(formControlName: AbstractControl): boolean {
    return formControlName.dirty && formControlName.valid;
  }
}
