// model
import {NeumaticoModel,MantenimientoModel}  from "../model.index";


export class PresionModel extends MantenimientoModel{


protected delDerecho:NeumaticoModel;
protected delDerechoAntes:number;
protected delDerechoDespues:number;

protected delIzquierdo:NeumaticoModel;
protected delIzquierdoAntes:number;
protected delIzquierdoDespues:number;

protected trasDerecho:NeumaticoModel;
protected trasDerechoAntes:number;
protected trasDerechoDespues:number;

protected trasIzquierdo:NeumaticoModel;
protected trasIzquierdoAntes:number;
protected trasIzquierdoDespues:number;


  constructor(neumatico:NeumaticoModel){
    super();
  }

}
