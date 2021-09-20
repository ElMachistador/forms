import { Component} from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

interface Product {
  name: string;
  description?: string; // long string limited to 300characters
  price: number; // should be positive and should be rounded to the cent before saving
  types: ('vegetable' | 'fruits' | 'fish' | 'meat')[]; // default to empty array if nothing selected
  stock: number; // should be a positive integer
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
form = new FormGroup({
  name: new FormControl(),
  description: new FormControl(),
  price: new FormControl(),
  types: new FormControl(),
  stock: new FormControl()
})
products: Product[] = []

sell(){
  if(this.form.valid){
    this.products.push(this.form.value)
    this.form.reset()
    console.log(this.products)
  }
}

}
