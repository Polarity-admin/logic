import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { SearchInitialAnalysisRequestListComponent } from './search-initial-analysis-request-list/search-initial-analysis-request-list.component';


/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [

  {
    path: '',
    redirectTo: 'search-initial-analysis-request-list'
  },
  {
    path: 'search-initial-analysis-request-list',
    component: SearchInitialAnalysisRequestListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchInitialAnalysisRequestListRoutingModule { }
