import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";


import {CONFIG}  from "../../config/config";

@IonicPage()
@Component({
  selector: 'page-lista-mantenimientos',
  templateUrl: 'lista-mantenimientos.html',
})
export class ListaMantenimientosPage extends Pages{

    protected habilitados:Array<string> = CONFIG.mantenimientos_habilitados;
    protected pagesArray:Array<object>=[];

  constructor(public navCtrl:NavController,public navParams :NavParams) {
    super(navCtrl,navParams);
    this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.lista_mantenimientos.name;
    this.desc = this.pages.lista_mantenimientos.desc;
    this.rellenarArrayPages();
  }


protected rellenarArrayPages(){
  for (var i = 0; i < this.habilitados.length; i++) {
    debugger
     if (this.pages[this.habilitados[i]]) {
       this.pagesArray[this.habilitados[i]] = this.pages[this.habilitados[i]];
  }
     }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMantenimientos');
  }

}
