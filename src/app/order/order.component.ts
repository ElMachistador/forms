import { Component } from '@angular/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';

interface Order {
  created: Date;
  items: { name: string, price: number, amount: number }[];
  email: string;
  tel: string;
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

  remove(index: number){
    this.items.removeAt(index)
  }
}
