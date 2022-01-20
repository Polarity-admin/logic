import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';


import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjCoreModule } from '@grapecity/wijmo.angular2.core';
import { WjNavModule, WjTreeView } from '@grapecity/wijmo.angular2.nav';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjChartInteractionModule } from '@grapecity/wijmo.angular2.chart.interaction';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';
import { WjViewerModule } from '@grapecity/wijmo.angular2.viewer';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../core/services/i18n.service';
import { HttpClient } from '@angular/common/http';

import { AttachmentManagementComponent } from './attachment-management/attachment-management.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    WjChartModule,
    WjChartAnimationModule,
    WjGaugeModule,
    WjGridModule,
    WjInputModule,
    WjCoreModule,
    WjNavModule,
    WjGridFilterModule,
    WjViewerModule,
    WjChartInteractionModule,
    WjGridMultirowModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        // useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
      extend: true
    }),
  ],
  declarations: [
    AttachmentManagementComponent, 
    SelectUserComponent,
    SelectCustomerComponent,
    SearchDialogComponent
  ], // 共通部品定義
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    WjChartModule,
    WjChartAnimationModule,
    WjGaugeModule,
    WjGridModule,
    WjInputModule,
    WjCoreModule,
    WjNavModule,
    WjGridFilterModule,
    WjViewerModule,
    WjChartInteractionModule,
    WjGridMultirowModule,
    TranslateModule,
    SelectUserComponent,
    AttachmentManagementComponent,
  ]
})
export class SharedModule {
}
