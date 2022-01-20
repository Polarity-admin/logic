import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// LSI 
import { InitialAnalysisLsiRequestComponent } from './lsi/request/initial-analysis-lsi-request.component';
import { InitialAnalysisLsiAnswerComponent } from './lsi/answer/initial-analysis-lsi-answer.component';
import { InitialAnalysisLsiApprovalComponent } from './lsi/approval/initial-analysis-lsi-approval.component';

// IS
import { InitialAnalysisIsRequestComponent } from './is/request/initial-analysis-is-request.component';
import { InitialAnalysisIsAnswerComponent } from './is/answer/initial-analysis-is-answer.component';
import { InitialAnalysisIsApprovalComponent } from './is/approval/initial-analysis-is-approval.component';

// MDD
import { InitialAnalysisMddRequestComponent } from './mdd/request/initial-analysis-mdd-request.component';
import { InitialAnalysisMddAnswerComponent } from './mdd/answer/initial-analysis-mdd-answer.component';
import { InitialAnalysisMddApprovalComponent } from './mdd/approval/initial-analysis-mdd-approval.component';

// Laser 
import { InitialAnalysisLaserRequestComponent } from './laser/request/initial-analysis-laser-request.component';
import { InitialAnalysisLaserAnswerComponent } from './laser/answer/initial-analysis-laser-answer.component';
import { InitialAnalysisLaserApprovalComponent } from './laser/approval/initial-analysis-laser-approval.component';


const routes: Routes = [
  {
    path: 'lsi-request',
    component: InitialAnalysisLsiRequestComponent
  }, 
  {
    path: 'lsi-answer',
    component: InitialAnalysisLsiAnswerComponent
  }, 
  {
    path: 'lsi-approval', 
    component: InitialAnalysisLsiApprovalComponent
  },
  {
    path: 'is-request', 
    component: InitialAnalysisIsRequestComponent
  },
  {
    path: 'is-answer',
    component: InitialAnalysisIsAnswerComponent
  },
  {
    path: 'is-approval',
    component: InitialAnalysisIsApprovalComponent
  },
  {
    path: 'mdd-request',
    component: InitialAnalysisMddRequestComponent
  }, 
  {
    path: 'mdd-answer',
    component: InitialAnalysisMddAnswerComponent
  },
  {
    path: 'mdd-approval',
    component: InitialAnalysisMddApprovalComponent
  },
  {
    path: 'laser-request',
    component: InitialAnalysisLaserRequestComponent
  }, 
  {
    path: 'laser-answer',
    component: InitialAnalysisLaserAnswerComponent
  },
  {
    path: 'laser-approval',
    component: InitialAnalysisLaserApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialAnalysisRoutingModule { }
