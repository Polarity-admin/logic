import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AnswerComponent } from './answer/answer.component';
import { ApproveComponent } from './approve/approve.component';
import { RequestComponent } from './request/request.component';

/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: '',
    redirectTo: 'request'
  },
  {
    path: 'answer',
    component: AnswerComponent
  },
  {
    path: 'approve',
    component: ApproveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariousSurveyRoutingModule { }
