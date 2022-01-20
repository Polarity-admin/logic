import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IS
import { DefectInvestigationReportIsCreationComponent } from './is/creation/defect-investigation-report-is-creation.component';
import { DefectInvestigationReportIsApprovalComponent } from './is/approval/defect-investigation-report-is-approval.component';

// MDD
import { DefectInvestigationReportMddCreationComponent } from './mdd/creation/defect-investigation-report-mdd-creation.component';
import { DefectInvestigationReportMddApprovalComponent } from './mdd/approval/defect-investigation-report-mdd-approval.component';

// LSI
import { DefectInvestigationReportLsiCreationComponent } from './lsi/creation/defect-investigation-report-lsi-creation.component';
import { DefectInvestigationReportLsiApprovalComponent } from './lsi/approval/defect-investigation-report-lsi-approval.component';

const routes: Routes = [
  {
    path: 'is-creation',
    component: DefectInvestigationReportIsCreationComponent
  }, 
  {
    path: 'is-approval',
    component: DefectInvestigationReportIsApprovalComponent
  }, 
  {
    path: '',
    redirectTo: 'is-creation'
  },
  {
    path: 'mdd-creation',
    component: DefectInvestigationReportMddCreationComponent
  },
  {
    path: 'mdd-approval',
    component: DefectInvestigationReportMddApprovalComponent
  },
  {
    path: 'lsi-creation',
    component: DefectInvestigationReportLsiCreationComponent
  },
  {
    path: 'lsi-approval',
    component: DefectInvestigationReportLsiApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefectInvestigationReportRoutingModule { }
