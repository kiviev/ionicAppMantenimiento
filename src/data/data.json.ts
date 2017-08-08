
export var data={
  user:{
    id:111,
    name:"Francisco",
    apellido1:"Alba",
    apellido2:"Ponce",
    email: "kiviev@gmail.com",
    role:1,
    password:"123456",
    direction:"C/Camino de Leganés 11",
    city:"Móstoles",
    state:"Madrid",
    country:"España",
    created_at:"2017-08-01 12:15:26",
    updated_at:"2017-08-01 12:15:26",
    image:"https://www.ionlitio.com/images/2008/06/q256_avatar.png"
  },
  autos:{
    0:{
      id:222,
      principal:true,
      matricula:"2569DLC",
      marca:"Citroen",
      modelo:"C4",
      bastidor:"XSFE5485DF8FS4FEFSDF5",
      combustible:"Diesel",
      km:120512,
      fechaFabricacion:"2006-04-24",
      fechaCompra:"2016-05-01",
      usuarioHabitual:111,
      image:"http://www.antonio-bravo.com/img/vehiculo-209709/antonio-bravo-2-0-hdi-138-collection-9977890.jpg?w=1024&h=768",
      created_at:"2017-08-01 12:15:26",
      updated_at:"2017-08-01 12:15:26"

    },
     1:{
      id:223,
      principal:false,
      matricula:"5869HJB",
      marca:"Nissan",
      modelo:"Qashqai",
      bastidor:"XSFE5485DF8FS4FEFSDF5",
      combustible:"Diesel",
      km:120512,
      fechaFabricacion:"2012-02-24",
      fechaCompra:"2012-02-24",
      usuarioHabitual:111,
      image:"https://imganuncios.mitula.net/nissan_qashqai_1_5dci_acenta_ss_4x2_110cv_seminuevo_con_pocos_km_14_5130132457215240691.jpg",
      created_at:"2017-08-01 12:15:26",
      updated_at:"2017-08-01 12:15:26"

    }
  },
  mantenimientos:{
    0 :{
      id : 333,
      type: 1,
      user: 111,
      km : 130222,
      taller : null,
      img: null,
      url: null,
      mantenimiento :{
        id:333,
        aceite: true,
        direccion : true,
        refrigeracion: true,
        valvulina:false,
        filtroAceite : false,
        filtroCombustible:false,
        filtroHabitaculo:false,
        filtroDireccion:false
      },
      created_at:"2017-01-03 12:15:26",
      updated_at:"2017-01-03 12:15:26"
    },
    1 :{
      id : 334,
      type: 1,
      user: 111,
      km : 140369,
      taller : null,
      img: null,
      url: null,
      mantenimiento :{
        id:334,
        aceite: false,
        direccion : true,
        refrigeracion: true,
        valvulina:false,
        filtroAceite : true,
        filtroCombustible:true,
        filtroHabitaculo:true,
        filtroDireccion:true
      },
      created_at:"2017-08-03 12:15:26",
      updated_at:"2017-08-03 12:15:26"
    },
    2 :{
      id : 335,
      type: 2,
      user: 111,
      km : 12569,
      taller : null,
      img: null,
      url: null,
      mantenimiento :{
        id:335,
        aceite: true,
        direccion : true,
        refrigeracion: true,
        valvulina:false,
        filtroAceite : true,
        filtroCombustible:true,
        filtroHabitaculo:true,
        filtroDireccion:true
      },
      created_at:"2017-08-03 12:15:26",
      updated_at:"2017-08-03 12:15:26"
    },
  }



}
