import { db } from '../models';
interface IFboolean{
  (flag:boolean): any;
}
export class BaseCtrl{
  public controller_name:string ;
  public need_check:boolean = false;
  public db = db;
  constructor(public action_name:string, public ctx:any, public next:any){
    this.controller_name = this.constructor.name.replace("Ctrl", "");
  }
  protected async before_action(){
    let call_name = `before_${this.action_name}`;
    if((this as any)[call_name] && typeof (this as any)[call_name] == 'function'){
      return await (this as any)[call_name]();
    }else{
      return true;
    }
  }
  protected async checkAuth(){
    // 未登录
    if(!this.ctx.state.user){
      this.ctx.body = {msg: "未登录"}
      this.ctx.status = 412
      return false;
    }else{
      return this.ctx.state.user.canAccess()
    }
  }
  public async hello(){
    this.ctx.body = this.controller_name + "hello world";
    await this.next();
  }
  public static go(action:string){
    const that = this;
    return async (ctx:any, next:any) =>{
      let ctrl = new that(action, ctx, next);
      // 没有权限
      // 或未登录
      if(ctrl.need_check && !await ctrl.checkAuth()){
        // ctrl.ctx.body = {};
        return;
      }
      if(await ctrl.before_action()){
        await (ctrl as any)[action]();
      }
      await ctrl.next()
    }
  }
}
