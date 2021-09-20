import { Component, OnInit } from '@angular/core';
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

export class LoginComponent implements OnInit {
form = new FormGroup({
  email : new FormControl(null, Validators.required),
  password : new FormControl(null, Validators.required)
})
logins?: Signin[] = []
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.logins?.push(this.form.value)
    this.form.reset()
    console.log(this.logins)
  }

}
