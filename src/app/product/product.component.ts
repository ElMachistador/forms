import { Component, OnInit } from '@angular/core';

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
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
