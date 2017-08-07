import {  NavController, NavParams } from 'ionic-angular';


// import pages
import {PagesUtils}  from "../../pages/pages.utils/pages.utils";

// import data service
import {DataService}  from "../../data/dataService";

export class Pages {

protected edit:boolean = false;
protected typePassword:string = "password";
protected title:string;
protected subtile:string;
protected desc:string;
protected data:any;
public pages:any;
public PagesUtilsObject:PagesUtils = PagesUtils.getInstance();

  constructor(public navCtrl:NavController,public navParams :NavParams){
    this.data = DataService.getData();
    this.pages =  this.PagesUtilsObject.pagesData;

    console.log(this);


  }
   public ionViewDidLoad() {
     console.log("I'm alive!");
  }

  protected pushPag(pag:string, params:any = null){
    debugger;
    this.navCtrl.push(this.pages[pag].page, {'key':params });
  }

  protected popPag(pag:string){
    this.navCtrl.pop();
  }

  protected toogleEdit(){
    if(this.edit) this.edit = false;
    else this.edit = true;
  }


  protected chageTypeInput(origin, final){
    if(origin == "t" && final == "p") this.typePassword  = "password";
    else if( origin == "p" && final == "t" ) this.typePassword = "text";
    else this.typePassword  = origin;
  }

  protected toogleTypePasswordInput(){
    if(this.typePassword == "password") this.chageTypeInput('p','t');
    else{
      this.chageTypeInput('t','p');
    }

  }
}
