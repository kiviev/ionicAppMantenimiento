
//model
import {MantenimientoModel} from '../model.index';

export class FluidosModel extends MantenimientoModel{

// tipo mantenimiento fluidos = 1

protected aceite:boolean;
protected direccion:boolean;
protected marcaDireccion:string;
protected refrigeracion:boolean;
protected valvulina:boolean;
protected filtroAceite:boolean;
protected filtroAire:boolean;
protected filtroCombustible:boolean;
protected filtroHabitaculo:boolean;
protected filtroDireccion:boolean;
protected created_at:Date;
protected updated_at:Date;

  constructor(){
    super();
    this.setType(1);
  }


  public getAceite(){
    return this.aceite;
  }

  public setAceite(aceite){
    this.aceite = aceite ;
  }


  public getDireccion(){
    return this.direccion;
  }

  public setDireccion(direccion){
    this.direccion = direccion ;
  }


  public getRefrigeracion(){
    return this.refrigeracion;
  }

  public setRefrigeracion(refrigeracion){
    this.refrigeracion = refrigeracion ;
  }


  public getValvulina(){
    return this.valvulina;
  }

  public setValvulina(valvulina){
    this.valvulina = valvulina ;
  }


  public getFiltroAceite(){
    return this.filtroAceite;
  }

  public setFiltroAceite(filtroAceite){
    this.filtroAceite = filtroAceite ;
  }


  public getFiltroAire(){
    return this.filtroAire;
  }

  public setFiltroAire(filtroAire){
    this.filtroAire = filtroAire ;
  }


  public getFiltroCombustible(){
    return this.filtroCombustible;
  }

  public setFiltroCombustible(filtroCombustible){
    this.filtroCombustible = filtroCombustible ;
  }


  public getFiltroDireccion(){
    return this.filtroDireccion;
  }

  public setFiltroDireccion(filtroDireccion){
    this.filtroDireccion = filtroDireccion ;
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
