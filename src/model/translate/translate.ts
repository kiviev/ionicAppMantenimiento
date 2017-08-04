
import {TRANS}    from "../../config/translate/translate";
import {CONFIG}   from "../../config/config";

export class TranslateModel {

static lang:any=TRANS[CONFIG.lang];
  constructor() {
    // this.lang = TRANS[CONFIG.lang]
  }


static trans(route:string) {
  let str = this.recompose(this.lang,route);
  if (typeof str == 'string')  return str;
  else return this.errorTrans(route, this.trans('error.trans'));
 }

static recompose(obj,string){
  let parts = string.split('.');
  let newObj = obj[parts[0]];
  if(parts[1]){
      parts.splice(0,1);
      let newString = parts.join('.');
      return this.recompose(newObj,newString);
  }
  return newObj;
}

static changeLang(lang:string){
  this.lang = TRANS[lang];
}


static getConfigLang(){
  return TRANS[CONFIG.lang];
}

static errorTrans(route:string ,msg:string){
  let error = {
    msg : msg,
    route : route

  }
  console.error(error);
}

}
