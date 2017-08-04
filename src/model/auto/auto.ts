
// model
import {UserModel,MediaModel}  from "../model.index";



export class AutoModel {


protected id:number;
protected matricula:string;
protected marca:string;
protected modelo:string;
protected bastidor:string;
protected combustible:string;
protected km:number;
protected fechaFabricacion:Date;
protected fechaCompra:Date;
protected usuarioHabitual:UserModel;
protected image:MediaModel;
protected created_at:Date;
protected updated_at:Date;

  constructor(){

  }


  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id ;
  }


  public getMatricula(){
    return this.matricula;
  }

  public setMatricula(matricula){
    this.matricula = matricula ;
  }


  public getMarca(){
    return this.marca;
  }

  public setMarca(marca){
    this.marca = marca ;
  }


  public getModelo(){
    return this.modelo;
  }

  public setModelo(modelo){
    this.modelo = modelo ;
  }


  public getbastidor(){
    return this.bastidor;
  }

  public setbastidor(bastidor){
    this.bastidor = bastidor ;
  }


  public getCombustible(){
    return this.combustible;
  }

  public setCombustible(combustible){
    this.combustible = combustible ;
  }


  public getKm(){
    return this.km;
  }

  public setKm(km){
    this.km = km ;
  }



  public getFechaFabricacion(){
    return this.fechaFabricacion;
  }

  public setFechaFabricacion(fechaFabricacion){
    this.fechaFabricacion = fechaFabricacion ;
  }


  public getFechaCompra(){
    return this.fechaCompra;
  }

  public setFechaCompra(fechaCompra){
    this.fechaCompra = fechaCompra ;
  }


  public getUsuarioHabitual(){
    return this.usuarioHabitual;
  }

  public setUsuarioHabitual(usuarioHabitual){
    this.usuarioHabitual = usuarioHabitual ;
  }


  public getImage(){
    return this.image;
  }

  public setImage(image){
    this.image = image ;
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
