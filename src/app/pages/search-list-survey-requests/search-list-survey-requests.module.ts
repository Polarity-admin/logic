import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListSurveyRequestsRoutingModule } from './search-list-survey-requests-routing.module';
import { SearchListSurveyRequestsComponent } from './search-list-survey-requests/search-list-survey-requests.component';

@NgModule({
  declarations: [SearchListSurveyRequestsComponent],
  imports: [CommonModule, SharedModule, SearchListSurveyRequestsRoutingModule],
  providers: [],
})
export class SearchListSurveyRequestsModule {}
