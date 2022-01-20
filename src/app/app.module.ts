import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClient } from '@angular/common/http';
import { MsalRedirectComponent } from '@azure/msal-angular';
import { NgxPermissionsModule } from 'ngx-permissions';
import { environment } from 'src/environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TranslationService } from './core/services/i18n.service';
import { setLicenseKey } from '@grapecity/wijmo';
import { TopBarComponent } from './layout/topbar/topbar.component';
import { SideBarNavComponent } from './layout/sidebar-nav/sidebar-nav.component';
import { HeaderBarComponent } from './layout/headerbar/headerbar.component';
import { fakeBackendProvider } from './data/fake-backend/fake.interceptor';
import { fakeErrorBackendProvider } from './data/fake-backend/fake-error.interceptor';
import { NgxWatermarkModule } from 'ngx-watermark';
import { NgxSpinnerModule } from 'ngx-spinner';

import { WjNavModule } from '@grapecity/wijmo.angular2.nav'



setLicenseKey(environment.wijmoLicenseKey);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    HeaderBarComponent,
    SideBarNavComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    NgxWatermarkModule,
    NgxPermissionsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        deps: [HttpClient]
      },
      isolate: false
    }),

    CoreModule,
    SharedModule,
    WjNavModule,


    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // provider used to create fake backend
    fakeErrorBackendProvider, // 異常系(HTTPエラー)fake用interceptor
    fakeBackendProvider, // 正常系、業務エラーfake用interceptor
  ],
  entryComponents: [],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule {

}
