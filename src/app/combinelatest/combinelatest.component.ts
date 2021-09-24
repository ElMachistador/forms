import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent {
  formGroup = new FormGroup({
    in1: new FormControl(),
    in2: new FormControl()
  })
  result$?= combineLatest([
    this.formGroup.get("in1")!.valueChanges,
    this.formGroup.get("in2")!.valueChanges
  ]
  )

}
