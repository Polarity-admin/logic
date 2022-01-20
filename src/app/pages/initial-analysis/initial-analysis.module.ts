import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from 'src/app/shared/shared.module';
import { InitialAnalysisRoutingModule } from './initial-analysis-routing.module';
// import { WjNavModule } from '@grapecity/wijmo.angular2.nav'

// Services

import { MainScreenLinksComponent } from './common/main-screen-links/main-screen-links.component';

// Common Module
import { NavigationComponent } from './common/navigation/navigation.component';

// LSI Common Module
import { OutlineRequestLsiComponent } from './common/outline-request/lsi/outline-request-lsi.component';
import { InformationReturnedSamplesLsiComponent } from './common/information-returned-samples/lsi/information-returned-samples-lsi.component';
import { AttachedFileLsiComponent } from './common/attached-file/lsi/attached-file-lsi.component';
import { RemarksLsiComponent } from './common/remarks/lsi/remarks-lsi.component';
import { WorkflowLsiComponent } from './common/workflow/lsi/workflow-lsi.component';
import { SelectDestinationRequestLsiComponent } from './common/select-destination-request/lsi/select-destination-request-lsi.component';
import { EmailDestinationRequestLsiComponent } from './common/email-destination-request/lsi/email-destination-request-lsi.component';
import { SelectDestinationAnalysisLsiComponent } from './common/select-destination-analysis/lsi/select-destination-analysis-lsi.component';
import { EmailDestinationAnalysisLsiComponent } from './common/email-destination-analysis/lsi/email-destination-analysis-lsi.component';
import { FooterLsiComponent } from './common/footer/lsi/footer-lsi.component';

// LSI
import { InitialAnalysisLsiRequestComponent } from './lsi/request/initial-analysis-lsi-request.component';
import { InitialAnalysisLsiAnswerComponent } from './lsi/answer/initial-analysis-lsi-answer.component';
import { InitialAnalysisLsiApprovalComponent } from './lsi/approval/initial-analysis-lsi-approval.component';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';

// IS Common Module
import { OutlineRequestIsComponent } from './common/outline-request/is/outline-request-is.component';
import { InformationReturnedSamplesIsComponent } from './common/information-returned-samples/is/information-returned-samples-is.component';
import { AttachedFileIsComponent } from './common/attached-file/is/attached-file-is.component';
import { RemarksIsComponent } from './common/remarks/is/remarks-is.component';
import { WorkflowIsComponent } from './common/workflow/is/workflow-is.component';
import { SelectDestinationRequestIsComponent } from './common/select-destination-request/is/select-destination-request-is.component';
import { EmailDestinationRequestIsComponent } from './common/email-destination-request/is/email-destination-request-is.component';
import { SelectDestinationAnalysisIsComponent } from './common/select-destination-analysis/is/select-destination-analysis-is.component';
import { EmailDestinationAnalysisIsComponent } from './common/email-destination-analysis/is/email-destination-analysis-is.component';
import { FooterIsComponent } from './common/footer/is/footer-is.component';

// IS
import { InitialAnalysisIsRequestComponent } from './is/request/initial-analysis-is-request.component';
import { InitialAnalysisIsAnswerComponent } from './is/answer/initial-analysis-is-answer.component';
import { InitialAnalysisIsApprovalComponent } from './is/approval/initial-analysis-is-approval.component';

// MDD Common Module
import { OutlineRequestMddComponent } from './common/outline-request/mdd/outline-request-mdd.component';
import { InformationReturnedSamplesMddComponent } from './common/information-returned-samples/mdd/information-returned-samples-mdd.component';
import { AttachedFileMddComponent } from './common/attached-file/mdd/attached-file-mdd.component';
import { RemarksMddComponent } from './common/remarks/mdd/remarks-mdd.component';
import { WorkflowMddComponent } from './common/workflow/mdd/workflow-mdd.component';
import { SelectDestinationRequestMddComponent } from './common/select-destination-request/mdd/select-destination-request-mdd.component';
import { EmailDestinationRequestMddComponent } from './common/email-destination-request/mdd/email-destination-request-mdd.component';
import { SelectDestinationAnalysisMddComponent } from './common/select-destination-analysis/mdd/select-destination-analysis-mdd.component';
import { EmailDestinationAnalysisMddComponent } from './common/email-destination-analysis/mdd/email-destination-analysis-mdd.component';
import { FooterMddComponent } from './common/footer/mdd/footer-mdd.component';

// MDD SubScreens
import { InitialAnalysisMddRequestComponent } from './mdd/request/initial-analysis-mdd-request.component';
import { InitialAnalysisMddAnswerComponent } from './mdd/answer/initial-analysis-mdd-answer.component';
import { InitialAnalysisMddApprovalComponent } from './mdd/approval/initial-analysis-mdd-approval.component';

// Laser Common Module
import { OutlineRequestLaserComponent } from './common/outline-request/laser/outline-request-laser.component';
import { InformationReturnedSamplesLaserComponent } from './common/information-returned-samples/laser/information-returned-samples-laser.component';
import { WorkflowLaserComponent } from './common/workflow/laser/workflow-laser.component';
import { AttachedFileLaserComponent } from './common/attached-file/laser/attached-file-laser.component'
import { RemarksLaserComponent } from './common/remarks/laser/remarks-laser.component';
import { SelectDestinationRequestLaserComponent } from './common/select-destination-request/laser/select-destination-request-laser.component';
import { EmailDestinationRequestLaserComponent } from './common/email-destination-request/laser/email-destination-request-laser.component';
import { SelectDestinationAnalysisLaserComponent } from './common/select-destination-analysis/laser/select-destination-analysis-laser.component';
import { EmailDestinationAnalysisLaserComponent } from './common/email-destination-analysis/laser/email-destination-analysis-laser.component';
import { FooterLaserComponent } from './common/footer/laser/footer-laser.component';
import { InitialAnalysisFinalReportComponent } from './common/final-report/final-report.component';

// Laser subscreens
import { InitialAnalysisLaserRequestComponent } from './laser/request/initial-analysis-laser-request.component';
import { InitialAnalysisLaserAnswerComponent } from './laser/answer/initial-analysis-laser-answer.component'; 
import { InitialAnalysisLaserApprovalComponent } from './laser/approval/initial-analysis-laser-approval.component';

@NgModule({
  imports: [
    WjGridMultirowModule,
    CommonModule,
    SharedModule,
    InitialAnalysisRoutingModule,

    MatTreeModule,
    MatIconModule, 
    MatButtonModule,
  ],
  declarations: [
    MainScreenLinksComponent,
    NavigationComponent,
    OutlineRequestLsiComponent,
    InformationReturnedSamplesLsiComponent,
    AttachedFileLsiComponent,
    RemarksLsiComponent,
    WorkflowLsiComponent,
    SelectDestinationRequestLsiComponent,
    EmailDestinationRequestLsiComponent,
    SelectDestinationAnalysisLsiComponent,
    EmailDestinationAnalysisLsiComponent,
    FooterLsiComponent,

    InitialAnalysisLsiRequestComponent,
    InitialAnalysisLsiAnswerComponent,
    InitialAnalysisLsiApprovalComponent,

    OutlineRequestIsComponent,
    InformationReturnedSamplesIsComponent,
    AttachedFileIsComponent,
    RemarksIsComponent,
    WorkflowIsComponent,
    SelectDestinationRequestIsComponent,
    EmailDestinationRequestIsComponent,
    SelectDestinationAnalysisIsComponent,
    EmailDestinationAnalysisIsComponent,
    FooterIsComponent,
    InitialAnalysisIsRequestComponent,
    InitialAnalysisIsAnswerComponent,
    InitialAnalysisIsApprovalComponent,
    
    OutlineRequestMddComponent,
    InformationReturnedSamplesMddComponent,
    AttachedFileMddComponent,
    RemarksMddComponent,
    WorkflowMddComponent,
    SelectDestinationRequestMddComponent,
    EmailDestinationRequestMddComponent,
    SelectDestinationAnalysisMddComponent,
    EmailDestinationAnalysisMddComponent,
    FooterMddComponent,
    InitialAnalysisMddRequestComponent,
    InitialAnalysisMddAnswerComponent,
    InitialAnalysisMddApprovalComponent,

    OutlineRequestLaserComponent,
    InformationReturnedSamplesLaserComponent,
    AttachedFileLaserComponent,
    RemarksLaserComponent,
    WorkflowLaserComponent,
    SelectDestinationRequestLaserComponent,
    EmailDestinationRequestLaserComponent,
    SelectDestinationAnalysisLaserComponent,
    EmailDestinationAnalysisLaserComponent,
    FooterLaserComponent,
    InitialAnalysisFinalReportComponent,

    InitialAnalysisLaserRequestComponent,
    InitialAnalysisLaserAnswerComponent,
    InitialAnalysisLaserApprovalComponent,
  ],
  
  exports: [
    OutlineRequestLsiComponent,
    InformationReturnedSamplesLsiComponent,
    AttachedFileLsiComponent,
    RemarksLsiComponent,
    WorkflowLsiComponent,
    SelectDestinationRequestLsiComponent,
    EmailDestinationRequestLsiComponent,
    SelectDestinationAnalysisLsiComponent,
    EmailDestinationAnalysisLsiComponent,
    FooterLsiComponent,

    OutlineRequestIsComponent,
    InformationReturnedSamplesIsComponent,
    AttachedFileIsComponent,
    RemarksIsComponent,
    
    WorkflowIsComponent,
    SelectDestinationRequestIsComponent,
    EmailDestinationRequestIsComponent,
    SelectDestinationAnalysisIsComponent,
    EmailDestinationAnalysisIsComponent,
    FooterIsComponent,
    
    OutlineRequestMddComponent,
    InformationReturnedSamplesMddComponent,
    AttachedFileMddComponent,
    RemarksMddComponent,
    WorkflowMddComponent,
    SelectDestinationRequestMddComponent,
    EmailDestinationRequestMddComponent,
    SelectDestinationAnalysisMddComponent,
    EmailDestinationAnalysisMddComponent,
    FooterMddComponent,
    
    OutlineRequestLaserComponent,
    InformationReturnedSamplesLaserComponent,
    AttachedFileLaserComponent,
    RemarksLaserComponent,
    WorkflowLaserComponent,
    SelectDestinationRequestLaserComponent,
    EmailDestinationRequestLaserComponent,
    SelectDestinationAnalysisLaserComponent,
    EmailDestinationAnalysisLaserComponent, 
    FooterLaserComponent,
  ], 

  providers: [ 
  ],

  bootstrap: [NavigationComponent],
})
export class InitialAnalysisModule { }
