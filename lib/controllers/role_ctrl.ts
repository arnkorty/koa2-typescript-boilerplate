import { ResourceCtrl } from "./resource_ctrl"
export class RoleCtrl extends ResourceCtrl{
  constructor(action:string, ctx:any, next:any){
    super(action, ctx, next);
    this.need_check = true;
  }
}
