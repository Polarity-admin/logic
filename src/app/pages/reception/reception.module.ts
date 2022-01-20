import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception/reception.component';
import { OccurenceComponent } from './occurence/occurence.component';
import { ProductInformationComponent } from './product-information/product-information.component';

@NgModule({
  declarations: [
    ReceptionComponent,
    OccurenceComponent,
    ProductInformationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReceptionRoutingModule,
  ],
  exports: [
    ReceptionComponent,
  ],
  providers: [
  ]
})
export class ReceptionModule {}
