import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "user", component: UserComponent},
  {path: "product", component: ProductComponent},
  {path: "order", component: OrderComponent},
  {path: "giftcard", component: GiftcardComponent},
  {path: "array", component: ArrayComponent},
  {path: "todo", component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
