import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage}  from "../services/storage/Storage";

// config
import {CONFIG}  from "../config/config";


import { HomePage } from '../pages/pages.index';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(platform.is('cordova')){
        platform.ready()
        .then(() => {
          let storage = new Storage();
        })

      }else console.log('No esta en un dispositivo');


      // storage.create();
//


    });
  }
}

