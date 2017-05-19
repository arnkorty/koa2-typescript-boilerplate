import { BaseCtrl } from './base_ctrl'
export class InfoCtrl extends BaseCtrl{
  protected _init(){
    this.need_login = true;
  }
}
