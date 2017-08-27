

export const CONFIG = {
  debug: true,
  lang : 'es',
  img_default: '/assets/img/not-available.png',
  mantenimientos_habilitados:[
      'fluidos',
      'neumaticos',
      'carroceria',
      'mecanica',
  ],
  tiposMantenimiento :{
     '1' :   'fluidos',
     '2'  :  'neumaticos',
     '3'  :  'carroceria',
     '4'  :  'mecanica'
  },
  db: {
      dataTest : true,
      name : 'MANTENIMIENTO',
      location : 'default',
      prefix : 'MT_',
      tables : {
         users : `CREATE TABLE 'MT_USERS' (
                    'ID'    INTEGER PRIMARY KEY AUTOINCREMENT,
                    'NAME'  TEXT,
                    'APELLIDO1' TEXT,
                    'APELLIDO2' TEXT,
                    'EMAIL' TEXT NOT NULL UNIQUE,
                    'PASSWORD'  TEXT,
                    'IMAGE' INTEGER,
                    'DIRECTION' TEXT,
                    'CITY'  TEXT,
                    'STATE' TEXT,
                    'COUNTRY'   TEXT,
                    'CREATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'UPDATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'DELETED'   INTEGER DEFAULT 0
                )`,
          talleres : `CREATE TABLE 'MT_TALLERES' (
                    'ID'  INTEGER PRIMARY KEY AUTOINCREMENT,
                    'NOMBRE'  TEXT,
                    'DIRECCION' TEXT,
                    'CITY'  TEXT,
                    'STATE' TEXT,
                    'COUNTRY' TEXT,
                    'IMAGE' INTEGER,
                    'EMAIL' TEXT,
                    'PHONE' TEXT,
                    'WEB' TEXT,
                    'GMAPS' TEXT,
                    'CALIFICACION'  NUMERIC,
                    'CREATED_AT'  TEXT DEFAULT CURRENT_TIMESTAMP,
                    'UPDATED_AT'  TEXT DEFAULT CURRENT_TIMESTAMP,
                    'DELETED' INTEGER DEFAULT 0
                  );`,
          auto : `CREATE TABLE 'MT_AUTOS' (
                    'ID'    INTEGER PRIMARY KEY AUTOINCREMENT,
                    'MATRICULA' TEXT,
                    'MARCA' TEXT,
                    'MODELO'    TEXT,
                    'BASTIDOR'  TEXT,
                    'COMBUSTIBLE'   TEXT,
                    'KM'    INTEGER,
                    'FECHA_FABRICACION' TEXT DEFAULT '0000-00-00 00:00:00',
                    'FECHA_COMPRA'  TEXT DEFAULT '0000-00-00 00:00:00',
                    'USUARIO_HABITUAL'  INTEGER,
                    'IMAGE' INTEGER,
                    'CREATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'UPDATE_AT' TEXT DEFAULT CURRENT_TIMESTAMP,
                    'DELETED'   INTEGER DEFAULT 0,
                    FOREIGN KEY('USUARIO_HABITUAL') REFERENCES 'MT_USERS'('ID')
                );`,

          mantenimientos : `CREATE TABLE 'MT_MANTENIMIENTOS' (
                    'ID'    INTEGER PRIMARY KEY AUTOINCREMENT,
                    'AUTO'  INTEGER NOT NULL,
                    'TYPE'  INTEGER,
                    'USER'  INTEGER,
                    'TALLER'    INTEGER,
                    'PRECIO'    NUMERIC,
                    'MONEDA'    TEXT,
                    'CREATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'UPDATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'DELETED'   INTEGER DEFAULT 0,
                    FOREIGN KEY('AUTO') REFERENCES 'MT_AUTOS'('ID'),
                    FOREIGN KEY('USER') REFERENCES 'MT_USERS'('ID')
                    FOREIGN KEY('TALLER') REFERENCES 'MT_TALLERES'('ID')
                );`,
          fluidos : `CREATE TABLE 'MT_FLUIDOS' (
                    'ID'    INTEGER PRIMARY KEY AUTOINCREMENT,
                    'ID_MANTENIMIENTO'  INTEGER NOT NULL,
                    'ACEITE'    INTEGER DEFAULT NULL,
                    'DIRECCION' INTEGER DEFAULT NULL,
                    'REFRIGERACION' INTEGER DEFAULT NULL,
                    'VALVULINA' INTEGER DEFAULT NULL,
                    'FILTRO_ACEITE' INTEGER DEFAULT NULL,
                    'FILTRO_COMBUSTIBLE'    INTEGER DEFAULT NULL,
                    'FILTRO_HABITACULO' INTEGER DEFAULT NULL,
                    'FILTRO_DIRECCION'  INTEGER DEFAULT NULL,
                    'CREATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'UPDATED_AT'    TEXT DEFAULT CURRENT_TIMESTAMP,
                    'DELETED'   INTEGER DEFAULT 0,
                    FOREIGN KEY('ID_MANTENIMIENTO') REFERENCES 'MT_MANTENIMIENTOS'('ID')
                );`,

      },
      inserts :{
          users : [`INSERT INTO MT_USERS
                    (NAME,APELLIDO1,APELLIDO2,EMAIL,PASSWORD,IMAGE,DIRECTION,CITY,STATE,COUNTRY)
                    VALUES
                    ('Paco','Alba','Ponce','kiviev@gmail.com','123456',
                    'https://www.ionlitio.com/images/2008/06/q256_avatar.png',
                    'Calle Cno de Leganés 11','Móstoles','Madrid','España')` ,

                    `INSERT INTO MT_USERS
                    (NAME,APELLIDO1,APELLIDO2,EMAIL,PASSWORD,IMAGE,DIRECTION,CITY,STATE,COUNTRY)
                    VALUES
                    ('Ana','Garcia','Perez','anaGarcia@gmail.com','123456',
                    'http://www.deculture.es/wp-content/uploads/2011/03/Deculture-Ghibli-Twitter-Avatar-11-e1315619036589.png',
                    'C/ Francisco Pizarro 8','Ribera del Fresno','Badajoz','España')`
          ]
      }
  }
}
