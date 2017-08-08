import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarroceriaPage } from './carroceria';

@NgModule({
  declarations: [
    CarroceriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CarroceriaPage),
  ],
  exports: [
    CarroceriaPage
  ]
})
export class CarroceriaModule {}
