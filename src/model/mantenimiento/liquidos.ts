
//model
import {MantenimientoModel} from '../model.index';

export class LiquidosModel extends MantenimientoModel{

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
