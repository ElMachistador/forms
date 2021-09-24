import { KeyValuePipe } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

interface Order {
  created: Date;
  items: { name: string, price: number, amount: number }[];
  email: string;
  tel: string;
}

interface Items {
  name: string,
  price: number,
  amount: number
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  formGroup = new FormGroup({
    created: new FormControl(),
    items: new FormArray([]),
    email: new FormControl(),
    tel: new FormControl()
  })
  item$?: Observable<any>
  amount$?: Observable<any>

  ngOnInit(){
    this.item$ = this.items.valueChanges  
  }


  get items() {
    return this.formGroup.get("items") as FormArray
  }

  add() {
    const control = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      amount: new FormControl()
    })
    this.items.push(control)
  }

  submit() {
    console.log(this.formGroup.value)
  }

  remove(index: number) {
    this.items.removeAt(index)
  }
}
