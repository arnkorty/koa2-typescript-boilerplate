import {verify} from '../utils/jwt'
import { db } from '../models'
export function tryVerify(){
  return async(ctx:any, next:any) => {
    let token = ctx.request.header['authorization'];
    let design = verify(token);
    if(!ctx.state) ctx.state = {};

    if(design && design.id){
      let user = await (db as any).User.findById(design.id)
      if(user){
        ctx.state.user = user;
      }
    }
    return next();
  }
}
