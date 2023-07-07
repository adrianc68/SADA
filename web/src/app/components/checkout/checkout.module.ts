import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    ProductListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    DataTablesModule
  ]
})
export class CheckoutModule { }
