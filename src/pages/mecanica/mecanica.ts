import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// config
import {CONFIG}  from "../../config/config";



@IonicPage()
@Component({
  selector: 'page-mecanica',
  templateUrl: 'mecanica.html',
})
export class MecanicaPage extends Pages{

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
    super(navCtrl,navParams , alertCtrl);;
    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.mecanica.name;
    this.desc = this.pages.mecanica.desc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mecanica');
  }

}
