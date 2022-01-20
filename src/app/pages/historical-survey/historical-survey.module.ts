import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricalSurveyRoutingModule } from './historical-survey-routing.module';
import { HistoricalSurveyComponent } from './historical-survey/historical-survey.component';


@NgModule({
  declarations: [HistoricalSurveyComponent],
  imports: [CommonModule, SharedModule, HistoricalSurveyRoutingModule],
  providers: [],
})
export class HistoricalSurveyModule {}
