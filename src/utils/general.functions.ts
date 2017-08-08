


export class GeneralFunctions{

constructor(){

}

  public static parseDateTime(date:string , lang:string){
       let codif = lang.toLowerCase() + '-' + lang.toUpperCase();
      return  new Date(date).toLocaleString(codif);

  }
}
