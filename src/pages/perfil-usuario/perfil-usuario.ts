import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";





@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage extends Pages{


  constructor(public navCtrl:NavController,public navParams :NavParams) {
    super(navCtrl,navParams);

    this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.perfil_usuario.name;
    this.desc = this.pages.perfil_usuario.desc;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuario');
  }

}
