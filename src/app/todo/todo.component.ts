import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  formArray = new FormArray([])
  done$?: Observable<any>

  ngOnInit() {
    this.done$ = this.formArray.valueChanges.pipe(
      map((value: ))
    )
  }

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
