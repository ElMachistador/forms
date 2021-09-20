import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms'


interface Signup {
  email: string;
  password: string;
  confirm: string;
}

export const passwordConfirmationValidator: ValidatorFn = (control:
  AbstractControl): ValidationErrors | null => {
  const password = control.get("password");
  const confirm = control.get("confirm");

  return password && confirm && password.value !== confirm.value ? {
    passwordConfirmation: true
  } : null;
};


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirm: new FormControl(null, Validators.required)
  }, { validators: passwordConfirmationValidator })
  logins?: Signup[] = []
  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    if (this.form.valid) {
      this.logins?.push(this.form.value)
      this.form.reset()
    }
  }
}