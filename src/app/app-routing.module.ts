import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { environment } from 'src/environments/environment';

/**
 * MSAL Angular can protect routes in your application
 * using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [
  {
    // Needed for hash routing
    path: 'error',
    component: HomeComponent
  },
  {
    // Needed for hash routing
    path: 'state',
    component: HomeComponent
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'reception',
    loadChildren: () => import('./pages/reception/reception.module').then(m => m.ReceptionModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'processing',
    loadChildren: () => import('./pages/processing/processing.module').then(m => m.ProcessingModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'mail',
    loadChildren: () => import('./pages/mail/mail.module').then(m => m.MailModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'destination',
    loadChildren: () => import('./pages/destination/destination.module').then(m => m.DestinationModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'reference',
    loadChildren: () => import('./pages/reference/reference.module').then(m => m.ReferenceModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'checking',
    loadChildren: () => import('./pages/checking/checking.module').then(m => m.CheckingModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-reception-list',
    loadChildren: () => import('./pages/search-reception-list/search-reception-list.module').then(m => m.SearchReceptionListModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-project-selection',
    loadChildren: () => import('./pages/search-project-selection/search-project-selection.module').then(m => m.SearchProjectSelectionModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-list-survey-requests',
    loadChildren: () => import('./pages/search-list-survey-requests/search-list-survey-requests.module').then(m => m.SearchListSurveyRequestsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-report-list',
    loadChildren: () => import('./pages/search-report-list/search-report-list.module').then(m => m.SearchReportListModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-report-sending-history',
    loadChildren: () => import('./pages/search-report-sending-history/search-report-sending-history.module').then(m => m.SearchReportSendingHistoryModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-initial-analysis-request-list',
    loadChildren: () => import('./pages/search-initial-analysis-request-list/search-initial-analysis-request-list.module').then(m => m.SearchInitialAnalysisRequestListModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-list-defective-products-lsi',
    loadChildren: () => import('./pages/search-list-defective-products-lsi/search-list-defective-products-lsi.module').then(m => m.SearchListDefectiveProductsLsiModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-list-defective-products-is',
    loadChildren: () => import('./pages/search-list-defective-products-is/search-list-defective-products-is.module').then(m => m.SearchListDefectiveProductsIsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-list-defective-products-dd',
    loadChildren: () => import('./pages/search-list-defective-products-dd/search-list-defective-products-dd.module').then(m => m.SearchListDefectiveProductsDdModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-list-defective-products-laser',
    loadChildren: () => import('./pages/search-list-defective-products-laser/search-list-defective-products-laser.module').then(m => m.SearchListDefectiveProductsLaserModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'search-dl-countermeasures',
    loadChildren: () => import('./pages/search-dl-countermeasures/search-dl-countermeasures.module').then(m => m.SearchDlCountermeasuresModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'various-survey',
    loadChildren: () => import('./pages/various-survey/various-survey.module').then(m => m.VariousSurveyModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'initial-analysis',
    loadChildren: () => import('./pages/initial-analysis/initial-analysis.module').then(m => m.InitialAnalysisModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'defect-investigation-report',
    loadChildren: () => import('./pages/defect-investigation-report/defect-investigation-report.module').then(m => m.DefectInvestigationReportModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'import-information',
    loadChildren: () => import('./pages/import-information/import-information.module').then(m => m.ImportInformationModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'historical-survey',
    loadChildren: () => import('./pages/historical-survey/historical-survey.module').then(m => m.HistoricalSurveyModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'device',
    loadChildren: () => import('./pages/device/device.module').then(m => m.DeviceModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'product-shipment',
    loadChildren: () => import('./pages/product-shipment/product-shipment.module').then(m => m.ProductShipmentModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
  {
    path: 'export-information',
    loadChildren: () => import('./pages/export-information/export-information.module').then(m => m.ExportInformationModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin',
        redirectTo: '/'
      }
    }
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: environment.debugOptions?.logRouterEvents || false,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
