import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  formGroup = new FormGroup({
    in1: new FormControl(),
    in2: new FormControl()
  })
  merge$ = merge(
    this.formGroup.get('in1')!.valueChanges,
    this.formGroup.get('in2')!.valueChanges
  )
}