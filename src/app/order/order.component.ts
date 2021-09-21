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
form = new FormGroup({
  created: new FormControl(),
  items: new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    amout: new FormControl()
  }),
  email: new FormControl(),
  tel: new FormControl()
})
orders: Order[] = []

  order(){
    if(this.form.valid){
      this.orders.push(this.form.value)
      this.form.reset()
    }
  }

}
