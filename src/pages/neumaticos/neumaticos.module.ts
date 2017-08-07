import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeumaticosPage } from './neumaticos';

@NgModule({
  declarations: [
    NeumaticosPage,
  ],
  imports: [
    IonicPageModule.forChild(NeumaticosPage),
  ],
  exports: [
    NeumaticosPage
  ]
})
export class NeumaticosModule {}
