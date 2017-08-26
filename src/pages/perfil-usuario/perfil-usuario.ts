import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//pages
import {TranslateModel,Pages,UserModel,MediaModel}  from "../../model/model.index";

// dependencias
import {Injector} from '@angular/core';

// config
import {CONFIG}  from "../../config/config";




@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage extends Pages{

    protected user:UserModel;



  constructor(public injector:Injector) {
    super(injector);



    let userdata = this.data.user;

    this.user = new UserModel(
        userdata.id,userdata.email,userdata.password,userdata.name,userdata.apellido1,userdata.apellido2,userdata.direction,userdata.city,userdata.country,userdata.state,userdata.created_at,userdata.updated_at
      );

    let avatar = new MediaModel()
    avatar.setSrc(userdata.image);
    this.user.setImage(avatar);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuario');
  }

  protected editUserImage(){
    if(this.edit){
    console.log('Editando imagen del usuario');

    }
  }

  protected editarPerfil(){
    console.log('Se ha editado el perfil de ' + this.user.getFullName());
    // this.user.setPassword(this.user.getPassword())
    console.log(this.user);
  }


  public getCardsData(){
    let autos= this.data.autos;
    let datafinish = [];

    for(let auto in autos){
      let a = autos[auto];
      datafinish[auto]={};
      datafinish[auto].user=this.data.user;
      datafinish[auto].user.fullName=this.getFullName(this.data.user);

      datafinish[auto].auto = a;
    }
    return datafinish;
  }

  public getFullName(userdata){

    return userdata.name + " " + userdata.apellido1 + " " + userdata.apellido2;
  }

}
