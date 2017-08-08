
// // config
import {CONFIG}  from "../../config/config";


export class MediaModel{

protected id:number;
protected name:string;
protected src:string;
protected type:string;
protected extension:string;
protected size:number;
protected created_at:Date;
protected updated_at:Date;

  constructor(){

  }


  public getName(){
    return this.name;
  }

  public setName(name){
    this.name = name ;
  }


  public getSrc(){
    if(!this.src) this.src = CONFIG.img_default;
    return this.src;
  }

  public setSrc(src){
    this.src = src ;
  }


  public getType(){
    return this.type;
  }

  public setType(type){
    this.type = type ;
  }



  public getSize(){
    return this.size;
  }

  public setSize(size){
    this.size = size ;
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
