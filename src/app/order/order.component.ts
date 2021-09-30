import { Component } from '@angular/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';

import { collection, collectionData, addDoc, Firestore } from '@angular/fire/firestore'

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
  orders$?: Observable<any>

  constructor(
    private firestore: Firestore,
  ) {
    const ref = collection(this.firestore, 'orders')
    this.orders$ = collectionData(ref)
  }

  ngOnInit() {
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


  addOrder() {
    if (this.formGroup.valid) {
      const ref = collection(this.firestore, "orders")
      addDoc(ref, this.formGroup.value)
      this.formGroup.reset()
    }
  }


  remove(index: number) {
    this.items.removeAt(index)
  }
}
