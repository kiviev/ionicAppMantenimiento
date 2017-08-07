import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";


@IonicPage()
@Component({
  selector: 'page-fluidos',
  templateUrl: 'fluidos.html',
})
export class FluidosPage extends Pages{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl,navParams);
     this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.lista_mantenimientos.name;
    this.desc = this.pages.lista_mantenimientos.desc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fluidos');
  }

}
