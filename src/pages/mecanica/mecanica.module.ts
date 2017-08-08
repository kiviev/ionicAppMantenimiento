import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MecanicaPage } from './mecanica';

@NgModule({
  declarations: [
    MecanicaPage,
  ],
  imports: [
    IonicPageModule.forChild(MecanicaPage),
  ],
  exports: [
    MecanicaPage
  ]
})
export class MecanicaModule {}
