import { Component } from '@angular/core';

import { countries } from '../countries';
import { genders } from '../genders';

import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { collection, collectionData, addDoc, Firestore, deleteDoc, doc } from '@angular/fire/firestore'


interface User {
  name: string;
  age: number;
  nationality: string; // (provide a list of countries)
  gender: 'male' | 'female' | 'transgenre' | 'none';
  id: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  readonly countries = countries;
  readonly genders = genders;
  form = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    nationality: new FormControl(),
    gender: new FormControl()
  })
  infos?: User[] = []
  user$?: Observable<any>

  constructor(
    private firestore: Firestore
  ) {
    const ref = collection(this.firestore, 'users');
    this.user$ = collectionData(ref,{idField: 'id'})
  }

  submit() {
    if (this.form.valid) {
      this.infos?.push(this.form.value)
      this.addUser(),
        console.log(this.form.value)
      this.form.reset()
    }
  }

  addUser() {
    const ref = collection(this.firestore, 'users');
    addDoc(ref, this.form.value)
  }

  remove(id: string) {
    const ref = doc(this.firestore, 'users', id )
    deleteDoc(ref)
  }

}
