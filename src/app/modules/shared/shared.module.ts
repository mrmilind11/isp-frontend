import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { DefaultIspImageDirective } from './directives/default-isp-image.directive';
import { RatingComponent } from './components/rating/rating.component';



@NgModule({
  declarations: [HeaderBarComponent, DefaultIspImageDirective, RatingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderBarComponent, DefaultIspImageDirective, RatingComponent]
})
export class SharedModule { }
