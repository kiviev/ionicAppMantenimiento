import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';


// config
import {CONFIG}  from "../../config/config";

@IonicPage()
@Component({
  selector: 'page-neumaticos',
  templateUrl: 'neumaticos.html',
})
export class NeumaticosPage extends Pages{


   constructor(public injector:Injector) {
    super(injector);

    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.lista_mantenimientos.name;
    this.desc = this.pages.lista_mantenimientos.desc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Neumaticos');
  }

}
