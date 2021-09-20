import { Component} from '@angular/core';

import { countries } from '../countries';
import { genders } from '../genders';

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
export class UserComponent{
  readonly countries = countries;
  readonly genders = genders;
  form = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    nationality: new FormControl(),
    gender: new FormControl()
  })

  infos?: User[] = []

  submit(){
    if (this.form.valid){
      this.infos?.push(this.form.value)
      console.log(this.infos)
      this.form.reset()
    }
  }
}
