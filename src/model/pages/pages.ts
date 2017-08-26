import {  NavController, NavParams , AlertController } from 'ionic-angular';

// funciones de uso general
import {GeneralFunctions as GF}  from "../../utils/general.functions";

// // config
import {CONFIG}  from "../../config/config";

// import pages
import {PagesUtils}  from "../../pages/pages.utils/pages.utils";

//models
import {TranslateModel}  from "../../model/model.index";

// import data service
import {DataService}  from "../../data/dataService";

// dependencias
import {Injector} from '@angular/core';

export class Pages {


// dependencias
protected navCtrl:NavController;
protected navParams:NavParams;
protected alertCtrl:AlertController;

protected lang:string = CONFIG.lang;
protected appName:string;
protected nuevoMantenimiento:boolean = false;
protected edit:boolean = false;
protected soloVer:boolean= false;
protected typePassword:string = "password";
protected title:string;
protected subtitle:string;
protected desc:string;
protected data:any;
protected listaMantenimientos:Array<object> = [];
public pages:any;
public PagesUtilsObject:PagesUtils = PagesUtils.getInstance();

  constructor(public injector:Injector){

    this.navCtrl = this.injector.get(NavController);
    this.navParams = this.injector.get(NavParams);
    this.alertCtrl = this.injector.get(AlertController);

    this.appName=TranslateModel.trans('appName');
    this.data = DataService.getData();
    this.pages =  this.PagesUtilsObject.pagesData;
    if(this.navParams.get('soloVer') == true) this.soloVer = true;

  }
   public ionViewDidLoad() {
     console.log("I'm alive!");
  }

  protected pushPag(pag:string, params:object = null){
    this.navCtrl.push(this.pages[pag].page, params );
  }

  protected popPag(pag:string){
    this.navCtrl.pop();
  }

  protected toogleEdit(){
    if(this.edit) this.edit = false;
    else this.edit = true;
  }


  protected getMantForType(mantenimientos:object , tipo:number){
    let data=[];
    let length = Object.keys(mantenimientos).length;
    for (var i = 0; i < length; i++) {
        if(mantenimientos[i]['type'] == tipo){
         data[i]=mantenimientos[i];
        }
    }
    return data;
  }


  protected chageTypeInput(origin, final){
    if(origin == "t" && final == "p") this.typePassword  = "password";
    else if( origin == "p" && final == "t" ) this.typePassword = "text";
    else this.typePassword  = origin;
  }

  protected toogleTypePasswordInput(){
    if(this.typePassword == "password") this.chageTypeInput('p','t');
    else{
      this.chageTypeInput('t','p');
    }

  }

  protected printTime(time){
    return  time ? GF.parseDateTime(time,this.lang) : '';
  }

  protected  showConfirm(obj,func) {
    let confirm = this.alertCtrl.create({
      title: obj.title,
      message: obj.message,
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            func();

            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  protected storage(object  ){
    let store = function (object){
      console.log('mando a guardar el objeto: ' + object);
    }
     this.showConfirm({
      title: '¿Enviar?',
      message: 'Cuando envíes se guardará la información!',
    },store);

  }



}
