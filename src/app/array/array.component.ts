import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent {

formArray = new FormArray([
  new FormControl("Please add activities")
])
index?: number


  addActivity(){
    const control = new FormControl()
    this.formArray.push(control)
  }

  remove(index: number){
    this.formArray.removeAt(index)
    console.log(index)
  }

}
