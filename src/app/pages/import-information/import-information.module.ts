import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

//Common Module
import { SampleDialogComponent } from './common/sample-dialog/sample-dialog.component';

import { ImportInformationRoutingModule } from './import-information-routing.module';
import { ImportInformationNewCreationComponent } from './new-creation/new-creation.component';
import { ImportInformationListComponent } from './list/listcomponent';

@NgModule({
  declarations: [
    SampleDialogComponent,
    ImportInformationNewCreationComponent,
    ImportInformationListComponent,
  ],
  imports: [
      CommonModule, 
      SharedModule, 
      ImportInformationRoutingModule
    ],
})
export class ImportInformationModule {}
