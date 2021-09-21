import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
  form = new FormControl()
  formGroup = new FormGroup({
    email: new FormControl(),
    price: new FormControl(),
    activities: new FormArray([])
  })
  giftcard: GiftCard[] = []

  addActivity(event: Event) {
    if (this.form.valid) {
      event.preventDefault()
      const activity = this.form.value
      this.formGroup.value.activities.push(activity)
      this.form.reset()
    }
  }

  send() {
    if(this.formGroup.valid){
      this.giftcard.push(this.formGroup.value)
      this.formGroup.reset()
    }
  }

}
