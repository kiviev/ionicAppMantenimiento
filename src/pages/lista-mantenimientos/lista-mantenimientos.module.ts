import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMantenimientosPage } from './lista-mantenimientos';

@NgModule({
  declarations: [
    ListaMantenimientosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMantenimientosPage),
  ],
  exports: [
    ListaMantenimientosPage
  ]
})
export class ListaMantenimientosModule {}
