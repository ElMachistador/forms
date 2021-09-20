import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';



interface User {
  name: string;
  age: number;
  nationality: string; // (provide a list of countries)
  gender: 'male' | 'female' | 'transgenre' | 'none';
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    nationality: new FormControl(),
    gender: new FormControl()
  })

  infos?: User[] = []

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid){
      this.infos?.push(this.form.value)
      console.log(this.infos)
    }
    this.form.reset()
  }
}
