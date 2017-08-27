
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export class mySQLite{

  private static _instance :mySQLite = new SQLite();
  constructor(){
    if(mySQLite._instance){
            throw new Error("Error: Instantiation failed: Use mySQLite.getInstance() instead of new.");
        }
        mySQLite._instance = this;
  }

    public static getInstance():mySQLite
    {
        return mySQLite._instance;
    }


}
