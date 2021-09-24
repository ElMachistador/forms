import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, merge } from 'rxjs';
import { map, mapTo } from "rxjs/operators"

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  formGroup = new FormGroup({
    in1: new FormControl(),
    in2: new FormControl()
  })
  merge$?: Observable<any>

  constructor() { }

  ngOnInit(): void {
    const n1 = this.formGroup.valueChanges.pipe(
      map((({in1}) => in1))
    )
    const n2 = this.formGroup.valueChanges.pipe(
      map((({in2}) => in2))
    )
    this.merge$ = merge(
      n1,n2
    )
  }

}
