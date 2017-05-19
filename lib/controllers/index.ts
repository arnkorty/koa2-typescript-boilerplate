export async function hello(ctx:any, next:any){
  await next();
  ctx.body = "hello world";
  ctx.status;
}
export { BaseCtrl } from './base_ctrl';
export { AuthCtrl } from './auth_ctrl';

export { RoleCtrl } from './role_ctrl'
