import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { SearchListDefectiveProductsLaserComponent } from './search-list-defective-products-laser/search-list-defective-products-laser.component';


/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [

  {
    path: '',
    redirectTo: 'search-list-defective-products-laser'
  },
  {
    path: 'search-list-defective-products-laser',
    component: SearchListDefectiveProductsLaserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchListDefectiveProductsLaserRoutingModule { }
