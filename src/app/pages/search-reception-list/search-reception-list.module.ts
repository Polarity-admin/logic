import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchReceptionListRoutingModule } from './search-reception-list-routing.module';
import { SearchReceptionListComponent } from './search-reception-list/search-reception-list.component';

@NgModule({
  declarations: [SearchReceptionListComponent],
  imports: [CommonModule, SharedModule, SearchReceptionListRoutingModule],
  providers: [],
})
export class SearchReceptionListModule {}
