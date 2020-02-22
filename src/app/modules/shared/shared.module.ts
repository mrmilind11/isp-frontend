import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { DefaultIspImageDirective } from './directives/default-isp-image.directive';



@NgModule({
  declarations: [HeaderBarComponent, DefaultIspImageDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderBarComponent, DefaultIspImageDirective]
})
export class SharedModule { }
