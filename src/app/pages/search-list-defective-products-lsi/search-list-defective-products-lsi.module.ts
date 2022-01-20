import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListDefectiveProductsLsiRoutingModule } from './search-list-defective-products-lsi-routing.module';
import { SearchListDefectiveProductsLsiComponent } from './search-list-defective-products-lsi/search-list-defective-products-lsi.component';

@NgModule({
  declarations: [SearchListDefectiveProductsLsiComponent],
  imports: [CommonModule, SharedModule, SearchListDefectiveProductsLsiRoutingModule],
  providers: [],
})
export class SearchListDefectiveProductsLsiModule {}
