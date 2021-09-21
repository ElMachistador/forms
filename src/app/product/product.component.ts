import { Component} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {productNames} from '../product-names';



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
  readonly productNames = productNames
form = new FormGroup({
  name: new FormControl(null, Validators.required),
  description: new FormControl(null, Validators.required),
  price: new FormControl(null, Validators.required),
  types: new FormControl([]),
  stock: new FormControl(null, Validators.required)
})
products: Product[] = []

sell(){
  if(this.form.valid){
    const product = this.form.value
    product.stock = Math.round(product.stock)
    this.products.push(product)
    this.form.reset()
    console.log(product)
  }
}

}
