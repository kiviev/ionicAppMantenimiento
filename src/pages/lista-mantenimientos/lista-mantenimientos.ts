import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';

// config
import {CONFIG}  from "../../config/config";

@IonicPage()
@Component({
  selector: 'page-lista-mantenimientos',
  templateUrl: 'lista-mantenimientos.html',
})
export class ListaMantenimientosPage extends Pages{

    protected habilitados:Array<string> = CONFIG.mantenimientos_habilitados;
    public pagesArray:Array<object> = [];


   constructor(public injector:Injector) {
    super(injector);

    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.lista_mantenimientos.name;
    this.desc = this.pages.lista_mantenimientos.desc;

    this.rellenarArrayPages();
  }


public rellenarArrayPages(){
  for (var i = 0; i < this.habilitados.length; i++) {

     if (this.pages[this.habilitados[i]]) {
       this.pagesArray[i] = this.pages[this.habilitados[i]];
    }
  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMantenimientos');
  }

}
