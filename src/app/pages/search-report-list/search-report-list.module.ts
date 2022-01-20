import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchReportListRoutingModule } from './search-report-list-routing.module';
import { SearchReportListComponent } from './search-report-list/search-report-list.component';

@NgModule({
  declarations: [SearchReportListComponent],
  imports: [CommonModule, SharedModule, SearchReportListRoutingModule],
  providers: [],
})
export class SearchReportListModule {}
