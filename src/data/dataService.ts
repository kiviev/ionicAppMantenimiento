import {data}  from "./data.json";


export class DataService{

  // public data;

  // constructor(){
  //   this.data =DATA;
  // }


  public static getData(){
    return data;
  }

  // public static setData(newData){
  //   data = newData;
  // }

  public static getUser(){
    if(data.user) return data.user;
    else{
      throw new Error("No tenemos datos de usuario");
    }
  }


  public static getAutos(){
    if(data.autos) return data.autos;
    else{
      throw new Error("No tenemos datos de autos");
    }
  }



}
