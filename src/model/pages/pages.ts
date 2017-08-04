import {  NavController, NavParams } from 'ionic-angular';


// import pages
import {PagesUtils}  from "../../pages/pages.utils/pages.utils";

export class Pages {


// public navCtrl;
// public navParams;
protected title:string;
protected subtile:string;
protected desc:string;
public pages:any;
public PagesUtilsObject:PagesUtils = PagesUtils.getInstance();

  constructor(public navCtrl:NavController,public navParams :NavParams){
    // this.navParams= NavParams;
    // this.navCtrl= NavController;
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

}
