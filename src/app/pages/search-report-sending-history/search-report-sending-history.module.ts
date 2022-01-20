import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchReportSendingHistoryRoutingModule } from './search-report-sending-history-routing.module';
import { SearchReportSendingHistoryComponent } from './search-report-sending-history/search-report-sending-history.component';

@NgModule({
  declarations: [SearchReportSendingHistoryComponent],
  imports: [CommonModule, SharedModule, SearchReportSendingHistoryRoutingModule],
  providers: [],
})
export class SearchReportSendingHistoryModule {}
