import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreListComponent } from './store-list/store-list.component';

@NgModule({
  declarations: [
    StoreItemComponent,
    StoreListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StoreListComponent
  ]
})
export class StoreModule { }
