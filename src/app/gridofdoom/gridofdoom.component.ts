import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-gridofdoom',
  templateUrl: './gridofdoom.component.html',
  styleUrls: ['./gridofdoom.component.scss']
})
export class GridofdoomComponent {
  formArray = new FormArray([
  ])

  add() {
    const control = new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])
    this.formArray.push(control)
    console.log(this.formArray.value)
  }
  
  submit(){
    console.log(this.formArray.value)
  }
}
