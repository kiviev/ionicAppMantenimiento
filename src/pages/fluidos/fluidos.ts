import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel ,FluidosModel}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-fluidos',
  templateUrl: 'fluidos.html',
})
export class FluidosPage extends Pages{
  protected fluidosMantenimiento:FluidosModel;
  protected fluidosMantenimientoAntiguo:FluidosModel;
  public sqlite;

   constructor(public injector:Injector) {
    super(injector);


    this.title = TranslateModel.trans('appName');
    this.subtitle = this.pages.fluidos.name;
    this.desc = this.pages.fluidos.desc;
    this.fluidosMantenimiento = new FluidosModel();
    if(this.navParams.get('edit')){
      this.edit = true;
    }
    if(this.navParams.get('mantenimiento')){
      let mant = this.navParams.get('mantenimiento');
      let fluidos = mant.mantenimiento;

      this.fluidosMantenimiento.setId(mant.id);
      this.fluidosMantenimiento.setKm(mant.km);
      this.fluidosMantenimiento.setCreatedAt(mant.created_at);
      // this.fluidosMantenimiento.setTaller(mant.taller);
      this.fluidosMantenimiento.setAceite(fluidos.aceite);
      this.fluidosMantenimiento.setDireccion(fluidos.direccion);
      this.fluidosMantenimiento.setRefrigeracion(fluidos.refrigeracion);
      this.fluidosMantenimiento.setValvulina(fluidos.valvulina);
      this.fluidosMantenimiento.setFiltroAceite(fluidos.filtroAceite);
      this.fluidosMantenimiento.setFiltroCombustible(fluidos.filtroCombustible);
      this.fluidosMantenimiento.setFiltroAceite(fluidos.filtroHabitaculo);
      this.fluidosMantenimiento.setFiltroDireccion(fluidos.filtroDireccion);

    }

    if(!this.edit) this.listaMantenimientos = this.getMantForType(this.data.mantenimientos , this.fluidosMantenimiento.getType());


  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad Fluidos');
    console.log(this.fluidosMantenimiento);
  }

}
