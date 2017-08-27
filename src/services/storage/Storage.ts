
import { mySQLite} from './MySQLite';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Platform } from 'ionic-angular';
// import {Injectable} from '@angular/core';
//config
import {CONFIG}  from "../../config/config";

// @Injectable()
export class Storage{

  public db:any = null;
  public dbconfig = {
    name : CONFIG.db.name,
    location : CONFIG.db.location
  }
  public dbname:string = CONFIG.db.name;
  public dbprefix:string = CONFIG.db.prefix;
  public dbObject:any;
  constructor(){
      this.db = mySQLite.getInstance();
      this.createDb();
      this.dbObject = SQLiteObject;
  }

  public createDb(){
    this.db.deleteDatabase(this.dbconfig);
    this.db.create(this.dbconfig)
    .then((db: SQLiteObject) => {
        //ejecutando querys
        let querysTables = CONFIG.db.tables;
        for (var table in querysTables) {
          // creando las tablas por primera vez
          db.executeSql(querysTables[table], {})
          .then(() => console.log('Executed SQL: ' + querysTables[table]))
          .catch(e => console.log('Error ejecutando query:'  + e));
        }
        // si estamos en debug y queremos datos de prueba
        if(CONFIG.debug && CONFIG.db.dataTest){
          let querysInsert = CONFIG.db.inserts;

          let users = querysInsert.users;
          for (var i in users) {
            db.executeSql(users[i], {})
            .then(() => console.log('Executed SQL: ' + users[i]))
            .catch(e => console.log('Error ejecutando query:'  + e));
          }
        } // end of CONFIG.debug

    })   // end of then1
    .catch( e => console.log('Error creando db:'  + e));

  }



}
