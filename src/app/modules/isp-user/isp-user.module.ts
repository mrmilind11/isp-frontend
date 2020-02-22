import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IspUserRoutingModule } from './isp-user-routing.module';
import { IspUserContainerComponent } from './components/isp-user-container/isp-user-container.component';
import { IspListComponent } from './components/isp-list/isp-list.component';
import { IspDetailComponent } from './components/isp-detail/isp-detail.component';


@NgModule({
  declarations: [IspUserContainerComponent, IspListComponent, IspDetailComponent],
  imports: [
    CommonModule,
    IspUserRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class IspUserModule { }
