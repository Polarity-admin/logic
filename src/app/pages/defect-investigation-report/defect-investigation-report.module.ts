import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefectInvestigationReportRoutingModule } from './defect-investigation-report-routing.module';

// Common Module
import { MainScreenLinksComponent } from './common/main-screen-links/main-screen-links.component';
import { BasicInformationComponent } from './common/basic-information/basic-information.component';
import { ReportedSampleTreatmentComponent } from './common/reported-sample-treatment/reported-sample-treatment.component';
import { InformationReturnedSamplesComponent } from './common/information-returned-samples/information-returned-samples.component';
import { FailureAnalysisReportComponent } from './common/failure-analysis-report/failure-analysis-report.component';
import { ActualSampleReTreatmentComponent } from './common/actual-sample-treatment/actual-sample-treatment.component';
import { AttachedFileComponent } from './common/attached-file/attached-file.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { SelectDestinationRequestComponent } from './common/select-destination/select-destination-request.component';
import { EmailDestinationRequestComponent } from './common/email-destination/email-destination-request.component';
import { FooterComponent } from './common/footer/footer.component';
import { SeeReportComponent } from './common/see-report/see-report.component';
import { AttachedSubComponent } from './common/attached-sub/attached-sub.component';

// IS 
import { DefectInvestigationReportIsCreationComponent } from './is/creation/defect-investigation-report-is-creation.component';
import { DefectInvestigationReportIsApprovalComponent } from './is/approval/defect-investigation-report-is-approval.component';

// MDD
import { DefectInvestigationReportMddCreationComponent } from './mdd/creation/defect-investigation-report-mdd-creation.component';
import { DefectInvestigationReportMddApprovalComponent } from './mdd/approval/defect-investigation-report-mdd-approval.component';

// LSI
import { DefectInvestigationReportLsiCreationComponent } from './lsi/creation/defect-investigation-report-lsi-creation.component';
import { DefectInvestigationReportLsiApprovalComponent } from './lsi/approval/defect-investigation-report-lsi-approval.component';

@NgModule({
  declarations: [
    MainScreenLinksComponent,
    BasicInformationComponent, 
    ReportedSampleTreatmentComponent,
    InformationReturnedSamplesComponent,
    FailureAnalysisReportComponent,
    ActualSampleReTreatmentComponent,
    AttachedFileComponent,
    WorkflowComponent,
    SelectDestinationRequestComponent,
    EmailDestinationRequestComponent,
    FooterComponent,
    SeeReportComponent,
    AttachedSubComponent,
    DefectInvestigationReportIsCreationComponent, 
    DefectInvestigationReportIsApprovalComponent, 
    DefectInvestigationReportMddCreationComponent, 
    DefectInvestigationReportMddApprovalComponent,
    DefectInvestigationReportLsiCreationComponent,
    DefectInvestigationReportLsiApprovalComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    DefectInvestigationReportRoutingModule,
  ],
  exports: [
    BasicInformationComponent, 
  ], 
  providers: [],
})
export class DefectInvestigationReportModule { }
