import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Pages{


  constructor(public navCtrl:NavController,public navParams :NavParams) {
    super(navCtrl,navParams);

    this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.home.name;
    this.desc = this.pages.home.desc;
  }

  cambiaIdioma(lang:string){
    TranslateModel.changeLang(lang);

  }

}
