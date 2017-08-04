import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VistaRapidaPage } from './vista-rapida';

@NgModule({
  declarations: [
    VistaRapidaPage,
  ],
  imports: [
    IonicPageModule.forChild(VistaRapidaPage),
  ],
  exports: [
    VistaRapidaPage
  ]
})
export class VistaRapidaModule {}
