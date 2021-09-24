import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface GiftCard {
  email: string;  // To who the gift card is addressed
  price: number;  // The price we offer
  activities: string[]; // A list of activities the person can pretend to.  // This should be a list of inputs with free text
}

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.scss']
})
export class GiftcardComponent {
  formGroup = new FormGroup({
    email: new FormControl(),
    price: new FormControl(),
    activities: new FormArray([
    ])
  })
  giftcard: GiftCard[] = []

  activities$?: Observable<string>

  ngOnInit() {
    this.activities$ = this.activities.valueChanges
  }


  get activities() {
    return this.formGroup.get("activities") as FormArray
  }

  addActivity(event: Event) {
    event.preventDefault()
    const control = new FormControl()
    this.activities.push(control)
  }

  send() {
    if (this.formGroup.valid) {
      this.giftcard.push(this.formGroup.value)
      this.formGroup.reset()
    }
  }

}
