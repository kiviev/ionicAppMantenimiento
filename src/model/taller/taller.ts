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
protected phone:string;
protected web:string;
protected gmaps:string;
protected calificacion:number;
protected created_at:Date;
protected updated_at:Date;

  constructor(){
    this.img = new MediaModel()
  }



  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id ;
  }


  public getNombre(){
    return this.nombre;
  }

  public setNombre(nombre){
    this.nombre = nombre ;
  }


  public getDireccion(){
    return this.direccion;
  }

  public setDireccion(direccion){
    this.direccion = direccion ;
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


  public getImg(){
    return this.img;
  }

  public setImg(img){
    this.img = img ;
  }



  public getPhone(){
    return this.phone;
  }

  public setPhone(phone){
    this.phone = phone ;
  }


  public getEmail(){
    return this.email;
  }

  public setEmail(email){
    this.email = email ;
  }


  public getWeb(){
    return this.web;
  }

  public setWeb(web){
    this.web = web ;
  }


  public getGmaps(){
    return this.gmaps;
  }

  public setGmaps(gmaps){
    this.gmaps = gmaps ;
  }


  public getCalificacion(){
    return this.calificacion;
  }

  public setCalificacion(calificacion){
    this.calificacion = calificacion ;
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
