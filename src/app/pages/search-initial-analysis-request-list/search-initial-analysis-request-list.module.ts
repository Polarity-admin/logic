import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchInitialAnalysisRequestListRoutingModule } from './search-initial-analysis-request-list-routing.module';
import { SearchInitialAnalysisRequestListComponent } from './search-initial-analysis-request-list/search-initial-analysis-request-list.component';

@NgModule({
  declarations: [SearchInitialAnalysisRequestListComponent],
  imports: [CommonModule, SharedModule, SearchInitialAnalysisRequestListRoutingModule],
  providers: [],
})
export class SearchInitialAnalysisRequestListModule { }
