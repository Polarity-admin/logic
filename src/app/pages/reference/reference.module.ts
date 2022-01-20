import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReferenceComponent } from './reference/reference.component';

import { FooterComponent } from './common/footer/footer.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { DetailInfoComponent } from './common/detail-info/detail-info.component';
import { FileAttachmentComponent } from './common/file-attachment/file-attachment.component';
import { OutlineComponent } from './common/outline/outline.component';

@NgModule({
  declarations: [
   
    ReferenceComponent, 
    
    OutlineComponent,
    DetailInfoComponent,
    FooterComponent,
    FileAttachmentComponent,
    WorkflowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReferenceRoutingModule,
  ],
  exports: [
    ReferenceComponent, 
    OutlineComponent,
    DetailInfoComponent,
  ],
  providers: [
  ]
})
export class ReferenceModule { }
