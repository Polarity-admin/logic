import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListDefectiveProductsLaserRoutingModule } from './search-list-defective-products-laser-routing.module';
import { SearchListDefectiveProductsLaserComponent } from './search-list-defective-products-laser/search-list-defective-products-laser.component';

@NgModule({
  declarations: [SearchListDefectiveProductsLaserComponent],
  imports: [CommonModule, SharedModule, SearchListDefectiveProductsLaserRoutingModule],
  providers: [],
})
export class SearchListDefectiveProductsLaserModule {}
