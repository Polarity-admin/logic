import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device/device.component';
import { TemporarySavedComponent } from './temporary-saved/temporary-saved.component';

@NgModule({
  declarations: [
    DeviceComponent,
    TemporarySavedComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    DeviceRoutingModule,
  ],
})
export class DeviceModule {}
