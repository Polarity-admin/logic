import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListDefectiveProductsDdRoutingModule } from './search-list-defective-products-dd-routing.module';
import { SearchListDefectiveProductsDdComponent } from './search-list-defective-products-dd/search-list-defective-products-dd.component';

@NgModule({
  declarations: [SearchListDefectiveProductsDdComponent],
  imports: [CommonModule, SharedModule, SearchListDefectiveProductsDdRoutingModule],
  providers: [],
})
export class SearchListDefectiveProductsDdModule {}
