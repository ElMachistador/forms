import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { ArrayComponent } from './array/array.component';
import { TodoComponent } from './todo/todo.component';
import { GridofdoomComponent } from './gridofdoom/gridofdoom.component';
import { DelayComponent } from './delay/delay.component';
import { MergeComponent } from './merge/merge.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    GiftcardComponent,
    ArrayComponent,
    TodoComponent,
    GridofdoomComponent,
    DelayComponent,
    MergeComponent,
    CombinelatestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
