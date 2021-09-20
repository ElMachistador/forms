import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface Signin {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  logins?: Signin[] = []


  login() {
    if (this.form.valid) {
      this.logins?.push(this.form.value)
      this.form.reset()
    }
  }

}
