import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { SearchListDefectiveProductsIsComponent } from './search-list-defective-products-is/search-list-defective-products-is.component';


/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [

  {
    path: '',
    redirectTo: 'search-list-defective-products-is'
  },
  {
    path: 'search-list-defective-products-is',
    component: SearchListDefectiveProductsIsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchListDefectiveProductsIsRoutingModule { }
