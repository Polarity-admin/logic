import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { MailComponent } from './mail/mail.component';
import { ReferenceComponent } from './reference/reference.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationmComponent } from './destinationm/destinationm.component';
import { ReportComponent } from './report/report.component';
import { CheckingComponent } from './checking/checking.component';


/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [

  {
    path: '',
    redirectTo: 'mail'
  },
  {
    path: 'mail',
    component: MailComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  },
  {
    path: 'destinationm',
    component: DestinationmComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'checking',
    component: CheckingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
