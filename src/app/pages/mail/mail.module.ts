import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { ReferenceComponent } from './reference/reference.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationmComponent } from './destinationm/destinationm.component';
import { ReportComponent } from './report/report.component';
import { CheckingComponent } from './checking/checking.component';

@NgModule({
  declarations: [
    MailComponent,
    ReferenceComponent,
    DestinationComponent,
    DestinationmComponent,
    ReportComponent,
    CheckingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MailRoutingModule,
  ],
  providers: [
  ],
})
export class MailModule {}
