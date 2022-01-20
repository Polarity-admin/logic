import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductShipmentComponent } from './product-shipment/product-shipment.component';

const routes: Routes = [
  {
    path: 'product-shipment', 
    component: ProductShipmentComponent
  },
  {
    path: '', 
    redirectTo: 'product-shipment'
  },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductShipmentRoutingModule { }
  