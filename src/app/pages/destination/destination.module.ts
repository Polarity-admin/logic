import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DestinationComponent } from './destination/destination.component';

import { FooterComponent } from './common/footer/footer.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { DetailInfoComponent } from './common/detail-info/detail-info.component';
import { FileAttachmentComponent } from './common/file-attachment/file-attachment.component';
import { OutlineComponent } from './common/outline/outline.component';

@NgModule({
  declarations: [
   
    DestinationComponent, 
    
    OutlineComponent,
    DetailInfoComponent,
    FooterComponent,
    FileAttachmentComponent,
    WorkflowComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    DestinationRoutingModule,
  ],
  exports: [
    DestinationComponent, 
    OutlineComponent,
    DetailInfoComponent,
  ],
  providers: [
  ]
})
export class DestinationModule { }
