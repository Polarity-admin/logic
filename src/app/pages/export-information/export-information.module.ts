import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

// Common Module
import { SampleDialogComponent } from './common/sample-dialog/sample-dialog.component';

import { ExportInformationRoutingModule } from './export-information-routing.module';
import { ExportInformationListComponent } from './list/list.component';
import { ExportInformationNewCreationComponent } from './new-creation/new-creation.component';
@NgModule({
  declarations: [
    SampleDialogComponent,
    ExportInformationListComponent,
    ExportInformationNewCreationComponent,
  ],
  imports: [
      CommonModule, 
      SharedModule, 
      ExportInformationRoutingModule,
    ],
})
export class ExportInformationModule {}
