import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';

// config
import {CONFIG}  from "../../config/config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Pages{

  protected tab1:Pages;
  protected tab2:Pages;
  protected tab3:Pages;

   constructor(public injector:Injector) {
    super(injector);

    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.home.name;
    this.desc = this.pages.home.desc;
    this.tab1= this.PagesUtilsObject.pagesData.lista_mantenimientos.page;
    this.tab2= this.PagesUtilsObject.pagesData.vista_rapida.page;
    this.tab3= this.PagesUtilsObject.pagesData.perfil_usuario.page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fluidos');
  }

  cambiaIdioma(lang:string){
    TranslateModel.changeLang(lang);

  }

}
