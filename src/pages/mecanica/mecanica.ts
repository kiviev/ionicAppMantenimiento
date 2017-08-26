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
  selector: 'page-mecanica',
  templateUrl: 'mecanica.html',
})
export class MecanicaPage extends Pages{


   constructor(public injector:Injector) {
    super(injector);

    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.mecanica.name;
    this.desc = this.pages.mecanica.desc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mecanica');
  }

}
