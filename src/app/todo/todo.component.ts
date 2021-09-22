import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  formArray = new FormArray([])

  add() {
    const todo = new FormGroup({
      text: new FormControl(),
      checked: new FormControl(false)
    })
    this.formArray.push(todo)
  }

  remove(index: number) {
    this.formArray.removeAt(index)
  }

}
