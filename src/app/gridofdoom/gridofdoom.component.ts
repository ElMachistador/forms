import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gridofdoom',
  templateUrl: './gridofdoom.component.html',
  styleUrls: ['./gridofdoom.component.scss']
})
export class GridofdoomComponent {
  formArray = new FormArray([
  ])
  coucou$?: Observable<number>

  ngOnInit() {
    this.coucou$ = this.formArray.valueChanges.pipe(
      map((value: boolean[][]) => value.flat().filter(checked => checked === true).length)
    )
  }

  add() {
    const control = new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])
    this.formArray.push(control)
  }

  submit() {
    console.log(this.formArray.value)
  }

}
