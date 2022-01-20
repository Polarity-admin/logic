import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceComponent } from './device/device.component';
import { TemporarySavedComponent } from './temporary-saved/temporary-saved.component';

const routes: Routes = [
    {
        path: 'device',
        component: DeviceComponent
    },
    {
        path: '',
        redirectTo: 'device'
    },
    {
        path: 'temporary-saved',
        component: TemporarySavedComponent
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
