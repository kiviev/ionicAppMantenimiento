import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";



@IonicPage()
@Component({
  selector: 'page-vista-rapida',
  templateUrl: 'vista-rapida.html',
})
export class VistaRapidaPage extends Pages{


  constructor(public navCtrl:NavController,public navParams :NavParams) {
    super(navCtrl,navParams);

    this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.vista_rapida.name;
    this.desc = this.pages.vista_rapida.desc;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaRapida');
  }

}
