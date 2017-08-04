// model
import {MediaModel}  from "../model.index";




export class TallerModel{

protected id:number;
protected nombre:string;
protected direccion:string;
protected city:string;
protected country:string;
protected img:MediaModel;
protected email:string;
protected web:string;
protected gmaps:string;
protected calificacion:number;
protected created_at:Date;
protected updated_at:Date;

  constructor(){

  }


  public getCreatedAt(){
    return this.created_at;
  }

  public setCreatedAt(created_at){
    this.created_at = created_at ;
  }



  public getUpdatedAt(){
    return this.updated_at;
  }

  public setUpdatedAt(updated_at){
    this.updated_at = updated_at ;
  }

}
