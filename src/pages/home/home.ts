import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Pages{

  protected tab1:Pages;
  protected tab2:Pages;
  protected tab3:Pages;

  constructor(public navCtrl:NavController,public navParams :NavParams) {
    super(navCtrl,navParams);

    this.title = TranslateModel.trans('appName');
    this.subtile = this.pages.home.name;
    this.desc = this.pages.home.desc;

    this.tab1= this.PagesUtilsObject.pagesData.lista_mantenimientos.page;
    this.tab2= this.PagesUtilsObject.pagesData.vista_rapida.page;
    this.tab3= this.PagesUtilsObject.pagesData.perfil_usuario.page;
  }

  cambiaIdioma(lang:string){
    TranslateModel.changeLang(lang);

  }

}
