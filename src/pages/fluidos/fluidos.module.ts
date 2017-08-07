import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FluidosPage } from './fluidos';

@NgModule({
  declarations: [
    FluidosPage,
  ],
  imports: [
    IonicPageModule.forChild(FluidosPage),
  ],
  exports: [
    FluidosPage
  ]
})
export class FluidosModule {}
