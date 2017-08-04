// model
import {MediaModel}  from "../model.index";

export class UserModel {

protected id:number;
protected email:string;
protected password:string;
protected image:MediaModel;
protected name:string;
protected apellido1:string;
protected apellido2:string;
protected direction:string;
protected city:string;
protected country:string;
protected created_at:Date;
protected updated_at:Date;

  constructor(/*id,email,password,name,apellido1,apellido2,direction,city,country,created_at,updated_at*/) {
      // this.id = id;
      // this.email = email;
      // this.name = name;
      // this.apellido1 = apellido1;
      // this.apellido2 = apellido2;
      // this.direction = direction;
      // this.city = city;
      // this.country = country;
      // this.created_at = created_at;
      // this.updated_at = updated_at;
    }


  public getFullName(){
    return this.name +' ' + this.apellido1 + ' ' + this.apellido2;
  }


  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id ;
  }


  public getEmail(){
    return this.email;
  }

  public setEmail(email){
    this.email = email ;
  }


  public getPassword(){
    return this.password;
  }

  public setPassword(password){
    this.password = password ;
  }


  public getName(){
    return this.name;
  }

  public setName(name){
    this.name = name ;
  }



  public getApellido1(){
    return this.apellido1;
  }

  public setApellido1(apellido1){
    this.apellido1 = apellido1 ;
  }


  public getAplellido2(){
    return this.apellido2;
  }

  public setAplellido2(apellido2){
    this.apellido2 = apellido2 ;
  }


  public getDirection(){
    return this.direction;
  }

  public setDirection(direction){
    this.direction = direction ;
  }


  public getCity(){
    return this.city;
  }

  public setCity(city){
    this.city = city ;
  }



  public getCountry(){
    return this.country;
  }

  public setCountry(country){
    this.country = country ;
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
