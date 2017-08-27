// model
import {UserModel,MediaModel,TallerModel , AutoModel}  from "../model.index";



export class MantenimientoModel {

protected id:number;
protected auto:AutoModel;
protected type:number;
protected user:UserModel;
protected km:number;
protected taller:TallerModel;
protected precio:number;
protected moneda:string;
protected created_at:Date;
protected updated_at:Date;


constructor() {
  this.taller = new TallerModel();

  }


  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id ;
  }


 public getAuto(){
   return this.auto;
 }

 public setAuto(auto){
   this.auto = auto ;
 }


  public getType(){
    return this.type;
  }

  public setType(type){
    this.type = type ;
  }


  public getKm(){
    return this.km;
  }

  public setKm(km){
    this.km = km ;
  }


  public getTaller(){
    return this.taller;
  }

  public setTaller(taller){
    this.taller = taller ;
  }


  public getPrecio(){
    return this.precio;
  }

  public setPrecio(precio){
    this.precio = precio ;
  }


  public getMoneda(){
    return this.moneda;
  }

  public setMoneda(moneda){
    this.moneda = moneda ;
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
