
import { mySQLite} from './MySQLite';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export class Storage{

  public db:any;
  constructor(){
    this.db = mySQLite.getInstance();
  }


  public create(){

    this.db.create({
  name: 'mantenimiento.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {
    let query = 'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)';

    db.executeSql(query, {})
      .then(() => console.log('Executed SQL' + query))
      .catch(e => console.log('errorpack:'  + e));


  })
  .catch(e => {
    console.log(e)


  });


}


}
