// model
import {UserModel,MediaModel,TallerModel}  from "../model.index";

export class MantenimientoModel {

protected id:number;
protected type:number;
protected user:UserModel;
protected km:number;
protected taller:TallerModel;
protected precio:number;
protected moneda:string;
protected created_at:Date;
protected updated_at:Date;


constructor() {

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
