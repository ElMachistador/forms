import { Component} from '@angular/core';

import { FormGroup, FormControl, FormArray} from '@angular/forms';

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
export class OrderComponent{
items?: FormArray
form = new FormGroup({
  created: new FormControl(),
  items: new FormArray([]),
  email: new FormControl(),
  tel: new FormControl()
})
orders: Order[] = []

  order(){
    if(this.form.valid){
      this.orders.push(this.form.value)
      this.form.reset()
      console.log(this.orders)
    }
  }

  createItems(){
    return new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      amount: new FormControl()
    })
  }

  addItems(){
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItems())
  }

}
