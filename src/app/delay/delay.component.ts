import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators'



@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  form = new FormControl()
  text$?: Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.text$ = this.form.valueChanges.pipe(
      debounceTime(500)
    )
  }

  test(event: Event) {
    event.preventDefault()
    const test = this.form.value
    console.log(test)
  }

}
