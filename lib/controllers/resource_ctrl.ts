import { BaseCtrl } from './base_ctrl';
export class ResourceCtrl extends BaseCtrl{
  protected _resource:any = null;
  public async index(){
    let users = await this.db[this.controller_name].findAll();
    this.ctx.body = users;
  }
  public async update(){
    let permit_params = this.permit_params()
    let res =await this.resource()
    if(res){
      await (res as any).update(permit_params);
    }
    this.ctx.body = res;
  }
  public async show(){
    this.ctx.body = await this.resource();
  }
  public async destroy(){
    let res = await this.resource();
    if(res){
      (res as any).destroy();
    }
  }
  public async create(){
    let permit_params = this.permit_params()
    let res = this.db[this.controller_name].create(permit_params);
    this.ctx.body = res;
  }

  protected async resource(){
    if(this._resource){
      return this._resource;
    }else{
      this._resource = await this.db[this.controller_name].findById(this.ctx.params.id)
      return this._resource;
    }
  }
  protected permit_params(){
    return this.ctx.params[this.controller_name.toLowerCase()];
  }
}
