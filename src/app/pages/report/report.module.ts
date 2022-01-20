import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportComponent } from './report/report.component';

import { FooterComponent } from './common/footer/footer.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { DetailInfoComponent } from './common/detail-info/detail-info.component';
import { FileAttachmentComponent } from './common/file-attachment/file-attachment.component';
import { OutlineComponent } from './common/outline/outline.component';

@NgModule({
  declarations: [
    ReportComponent, 
   

    OutlineComponent,
    DetailInfoComponent,
    FooterComponent,
    FileAttachmentComponent,
    WorkflowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule,
  ],
  exports: [
    ReportComponent, 
    OutlineComponent,
    DetailInfoComponent,
  ],
  providers: [
  ]
})
export class ReportModule { }
