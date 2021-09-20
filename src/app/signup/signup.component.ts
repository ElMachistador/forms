import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Signup {
  email: string;
  password: string;
  confirm: string;
}
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
})
logins?: Signup[] = []
  constructor() { }

  ngOnInit(): void {
  }

  signup(){
    let password = this.form.value.password
    let confirm = this.form.value.confirm
    if (password !== confirm){
      window.alert("password =/= confirmation, try again")
      return this.form.reset()
    } else {
      this.logins?.push(this.form.value)
      this.form.reset()
    }
  }
}
