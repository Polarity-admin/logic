import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportInformationNewCreationComponent } from './new-creation/new-creation.component';
import { ImportInformationListComponent } from './list/listcomponent';

const routes: Routes = [
  {
    path: 'new-creation',
    component: ImportInformationNewCreationComponent
  },
  {
    path: 'list',
    component: ImportInformationListComponent
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
export class ImportInformationRoutingModule { }