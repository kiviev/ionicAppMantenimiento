import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// config
import {CONFIG}  from "../../config/config";

// dependencias
import {Injector} from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-carroceria',
  templateUrl: 'carroceria.html',
})
export class CarroceriaPage extends Pages{


  constructor(public injector:Injector) {
    super(injector);

    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.carroceria.name;
    this.desc = this.pages.carroceria.desc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Carroceria');
  }

}
