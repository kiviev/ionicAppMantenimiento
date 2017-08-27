import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {  NavController, NavParams , AlertController } from 'ionic-angular';
import {Storage}  from "../services/storage/Storage";
import { MyApp } from './app.component';


// import pages
import {HomePage ,
        Pag1Page,
        ListaMantenimientosPage ,
        PerfilUsuarioPage,
        FluidosPage,
        NeumaticosPage,
        CarroceriaPage,
        MecanicaPage,
        VistaRapidaPage}  from "../pages/pages.index";

// tranlate
import {TranslateModel}  from "../model/model.index";


// pipes
import {ChangeTransPipe}  from "../pipes/pipe.index";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pag1Page,
    ListaMantenimientosPage ,
    PerfilUsuarioPage,
    FluidosPage,
    NeumaticosPage,
    CarroceriaPage,
    MecanicaPage,
    VistaRapidaPage,
    ChangeTransPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        backButtonText : TranslateModel.getConfigLang().buttons.back
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // Pag1Page,
    ListaMantenimientosPage ,
    PerfilUsuarioPage,
    FluidosPage,
    NeumaticosPage,
    CarroceriaPage,
    MecanicaPage,
    VistaRapidaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslateModel,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
