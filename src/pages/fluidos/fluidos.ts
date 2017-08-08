import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel ,FluidosModel}  from "../../model/model.index";



@IonicPage()
@Component({
  selector: 'page-fluidos',
  templateUrl: 'fluidos.html',
})
export class FluidosPage extends Pages{
  protected fluidosMantenimiento:FluidosModel;
  protected fluidosMantenimientoAntiguo:FluidosModel;

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
    super(navCtrl,navParams , alertCtrl);

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

      this.fluidosMantenimiento.setId(fluidos.id);
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
