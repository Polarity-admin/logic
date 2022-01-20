import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessingRoutingModule } from './processing-routing.module';
import { ProcessingComponent } from './processing/processing.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [ProcessingComponent, CertificateComponent],
  imports: [CommonModule, SharedModule, ProcessingRoutingModule],
  providers: [],
})
export class ProcessingModule {}
