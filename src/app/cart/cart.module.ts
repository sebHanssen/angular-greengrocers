import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    TotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent,
    TotalComponent
  ]
})
export class CartModule { }
