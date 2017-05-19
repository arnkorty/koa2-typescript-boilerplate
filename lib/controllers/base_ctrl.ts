import { db } from '../models';
interface IFboolean{
  (flag:boolean): any;
}
export class BaseCtrl{
  public controller_name:string ;
  // 是否检查登陆
  public need_login:boolean = true;
  // 是否检查有权限
  public need_check:boolean = true;
  public db = db;
  constructor(public action_name:string, public ctx:any, public next:any){
    this.controller_name = this.constructor.name.replace("Ctrl", "");
  }
  protected async before(){
    let call_name = `before_${this.action_name}`;
    if((this as any)[call_name] && typeof (this as any)[call_name] == 'function'){
      return await (this as any)[call_name]();
    }else{
      return true;
    }
  }
  protected _init(){
  }
  protected async checkAuth(){
    // 未登录
    if(this.need_login || this.need_check){
      if(!this.ctx.state.user){
        this.ctx.body = {msg: "未登录"}
        this.ctx.status = 412
        return false;
      }
      if(this.need_check){
        return this.ctx.state.user.canAccess(this.controller_name, this.action_name, this.ctx.request.method);
      }
    }
    return true;
  }
  public async hello(){
    this.ctx.body = this.controller_name + "hello world";
    await this.next();
  }
  public static go(action:string){
    const that = this;
    return async (ctx:any, next:any) =>{
      let ctrl = new that(action, ctx, next);
      ctrl._init()
      // 没有权限
      // 或未登录
      if(!await ctrl.checkAuth()){
        // ctrl.ctx.body = {};
        return;
      }
      if(await ctrl.before()){
        await (ctrl as any)[action]();
      }
      await ctrl.next()
    }
  }
}
