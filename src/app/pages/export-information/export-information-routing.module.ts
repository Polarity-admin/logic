import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportInformationListComponent } from './list/list.component';
import { ExportInformationNewCreationComponent } from './new-creation/new-creation.component';

const routes: Routes = [
  {
    path: 'list',
    component: ExportInformationListComponent
  },
  {
    path: 'new-creation',
    component: ExportInformationNewCreationComponent
  },
  {
    path: '',
    redirectTo: 'new-creation'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportInformationRoutingModule { }