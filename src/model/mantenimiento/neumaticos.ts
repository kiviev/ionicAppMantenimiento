// model
import {NeumaticoModel,MantenimientoModel}  from "../model.index";

export class NeumaticosModel extends MantenimientoModel{

protected delDerecho:NeumaticoModel;
protected delIzquierdo:NeumaticoModel;
protected trasDerecho:NeumaticoModel;
protected trasIzquierdo:NeumaticoModel;
protected repuesto:NeumaticoModel;


  constructor(){
    super();
  }


  public cambiaNeumatico(viejo:string , nuevo:NeumaticoModel){
    switch (viejo) {
      case "dd":
       this.delDerecho = nuevo;
        break;
      case "di":
       this.delIzquierdo = nuevo;
        break;
      case "td":
       this.trasDerecho = nuevo;
        break;
      case "td":
       this.trasDerecho = nuevo;
        break;
      case "re":
       this.repuesto = nuevo;
        break;

      default:
        console.log('No se ha seleccionado posicion del neumatico nuevo');
        break;
    }
  }

}
