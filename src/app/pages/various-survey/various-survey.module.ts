import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VariousSurveyRoutingModule } from './various-survey-routing.module';

// Main Screens
import { AnswerComponent } from './answer/answer.component';
import { ApproveComponent } from './approve/approve.component';
import { ActionsComponent } from './actions/actions.component';

// Common
import { MainScreenLinksComponent } from './common/main-screen-links/main-screen-links.component';
import { OutlineRequestComponent } from './common/outline-request/outline-request.component';
import { InformationReturnedSamplesComponent } from './common/information-returned-samples/information-returned-samples.component';
import { InvestigationResultComponent } from './common/investigation-result/investigation-result.component';
import { AttachedFileComponent } from './common/attached-file/attached-file.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { SelectDestinationComponent } from './common/select-destination/select-destination.component';
import { EmailDestinationComponent } from './common/email-destination/email-destination.component';
import { FooterBtnComponent } from './common/footer-btn/footer-btn.component';

@NgModule({
  declarations: [
    RequestComponent,
    AnswerComponent,
    ApproveComponent,
    ActionsComponent,
    MainScreenLinksComponent,
    OutlineRequestComponent,
    InformationReturnedSamplesComponent,
    InvestigationResultComponent,
    AttachedFileComponent,
    WorkflowComponent,
    SelectDestinationComponent,
    EmailDestinationComponent,
    FooterBtnComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    VariousSurveyRoutingModule
  ],
  providers: [
    
  ],
})
export class VariousSurveyModule {}
