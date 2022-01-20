import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricalSurveyComponent } from './historical-survey/historical-survey.component';


const routes: Routes = [
  {
    path: 'historical-survey',
    component: HistoricalSurveyComponent
  },
  {
    path: '',
    redirectTo: 'historical-survey'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalSurveyRoutingModule { }
