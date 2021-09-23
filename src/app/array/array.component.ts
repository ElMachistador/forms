import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent {

  formArray = new FormArray([
    new FormControl("Please add activities")
  ])
  text$?: Observable<string>

  ngOnInit() {
    this.text$ = this.formArray.valueChanges.pipe(
      map((value: string[]) => value.join("/"))
    )
  }

  addActivity() {
    const control = new FormControl()
    this.formArray.push(control)
    console.log(this.text$)
  }

  remove(index: number) {
    this.formArray.removeAt(index)
  }


}
