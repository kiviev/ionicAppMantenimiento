import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";

@IonicPage()

@Component({
  selector: 'page-pag1',
  templateUrl: 'pag1.html',
})


export class Pag1Page extends Pages{



  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
    super(navCtrl,navParams , alertCtrl);
    this.title = TranslateModel.trans('pages.pag1.title');
    this.desc = this.pages.page1.desc;
  }

  cambiaIdioma(lang:string){
    TranslateModel.changeLang(lang);

  }

}
