import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// config
import {CONFIG}  from "../../config/config";


@IonicPage()
@Component({
  selector: 'page-vista-rapida',
  templateUrl: 'vista-rapida.html',
})
export class VistaRapidaPage extends Pages{


  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
    super(navCtrl,navParams , alertCtrl);
    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.vista_rapida.name;
    this.desc = this.pages.vista_rapida.desc;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaRapida');
  }

}
