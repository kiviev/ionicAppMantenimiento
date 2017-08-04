
export class MediaModel{

protected name:string;
protected src:string;
protected type:string;
protected extension:string;
protected size:number;
protected created_at:Date;
protected updated_at:Date;

  constructor(){

  }



  public getCreatedAt(){
    return this.created_at;
  }

  public setCreatedAt(created_at){
    this.created_at = created_at ;
  }



  public getUpdatedAt(){
    return this.updated_at;
  }

  public setUpdatedAt(updated_at){
    this.updated_at = updated_at ;
  }


}
