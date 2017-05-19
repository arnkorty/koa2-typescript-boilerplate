import { ResourceCtrl } from "./resource_ctrl"
export class RoleCtrl extends ResourceCtrl{
  protected _init(){
    this.need_check = false;
  }
  public async show(){
    await super.show()
    console.log(await this.ctx.state.user.getUserRole())
  }
}
