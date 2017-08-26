import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
//pages
import {TranslateModel,Pages}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';


@IonicPage()

@Component({
  selector: 'page-pag1',
  templateUrl: 'pag1.html',
})


export class Pag1Page extends Pages{



   constructor(public injector:Injector) {
    super(injector);
    this.title = TranslateModel.trans('pages.pag1.title');
    this.desc = this.pages.page1.desc;
  }

  cambiaIdioma(lang:string){
    TranslateModel.changeLang(lang);

  }

}
