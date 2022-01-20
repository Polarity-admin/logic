import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListDefectiveProductsIsRoutingModule } from './search-list-defective-products-is-routing.module';
import { SearchListDefectiveProductsIsComponent } from './search-list-defective-products-is/search-list-defective-products-is.component';

@NgModule({
  declarations: [SearchListDefectiveProductsIsComponent],
  imports: [CommonModule, SharedModule, SearchListDefectiveProductsIsRoutingModule],
  providers: [],
})
export class SearchListDefectiveProductsIsModule {}
