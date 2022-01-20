import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductShipmentRoutingModule } from './product-shipment-routing.module';

import { ProductShipmentComponent } from './product-shipment/product-shipment.component';

@NgModule({
  declarations: [
    ProductShipmentComponent
  ],
  imports: [
      CommonModule, 
      SharedModule, 
      ProductShipmentRoutingModule,
    ],
  exports: [],
  providers: []  
})
export class ProductShipmentModule {}
