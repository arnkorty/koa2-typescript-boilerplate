import { BaseCtrl } from './base_ctrl'
export class AuthCtrl extends BaseCtrl{
  protected _init(){
    this.need_login = false;
    this.need_check = false;
  }
  public async login(){
    let user = await this.db.User.findOne({where: {email: this.ctx.params.email}})
    if(user && user.authenticate(this.ctx.params.password)){
      this.ctx.body = {
        user,
        jwt: user.jwt()
      }
    }
  }
  public async register(){
    let { user } = this.ctx.params
    let resource = await this.db.User.create(user)
    this.ctx.body = {user: resource,jwt: resource.jwt()}
  }
}
