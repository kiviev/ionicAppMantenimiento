

import {HomePage ,
        ListaMantenimientosPage ,
        PerfilUsuarioPage,
        VistaRapidaPage,
        Pag1Page}     from "../pages.index";

import {TranslateModel}  from "../../model/model.index";
// singleton
export class PagesUtils{

    private static instance:PagesUtils;
    private static allowInstance:Boolean;
    public pagesData : object;

    constructor(){

        this.pagesData = {
           'home'  : {
                      'page' :  HomePage,
                      'name' :  TranslateModel.trans('pages.home.title'),
                      'desc' :  TranslateModel.trans('pages.home.desc')
                    },
           'lista_mantenimientos'  : {
                      'page' :  ListaMantenimientosPage,
                      'name' :  TranslateModel.trans('pages.lista_mantenimientos.title'),
                      'desc' :  TranslateModel.trans('pages.lista_mantenimientos.desc')
                    },
           'perfil_usuario'  : {
                      'page' :  PerfilUsuarioPage,
                      'name' :  TranslateModel.trans('pages.perfil_usuario.title'),
                      'desc' :  TranslateModel.trans('pages.perfil_usuario.desc')
                    },
           'vista_rapida'  : {
                      'page' :  VistaRapidaPage,
                      'name' :  TranslateModel.trans('pages.vista_rapida.title'),
                      'desc' :  TranslateModel.trans('pages.vista_rapida.desc')
                    },
            'page1' : {
                      'page' :  Pag1Page,
                      'name' :  TranslateModel.trans('pages.pag1.title'),
                      'desc' :  TranslateModel.trans('pages.pag1.desc')
                    },
        }
    }



   public Singleton(){
       if(!PagesUtils.allowInstance){
           throw new Error("Debes usar getInstance()");
       }else{
           console.trace("Se inicializó una instancia de Singleton");
       }
    }

    public static  getInstance():PagesUtils{
        if(this.instance == null){
            this.allowInstance = true;
            this.instance= new PagesUtils( );
            this.allowInstance = false;
        }else{
         console.trace("Se regresa la instancia existente");
      }
        return this.instance;
    }

}



