import * as Router from 'koa-router';
import * as Ctrl from '../controllers';
(Router.prototype as any).resources = function(path:string, ctrl:any){
    this.get(path, ctrl.go('index'))
    this.get(`${path}/:id`, ctrl.go('show'))
    this.put(`${path}/:id`, ctrl.go('update'))
    this.delete(`${path}/:id`, ctrl.go('destroy'))
    this.post(path, ctrl.go('create'));
}
export function router(){
  const router = new Router({
    prefix: '/api',
  }) as any;
  router.post('/auth/login', Ctrl.AuthCtrl.go('login'));
  router.post('/auth/register', Ctrl.AuthCtrl.go('register'));

  router.resources('/roles', Ctrl.RoleCtrl);

  router.get("/", Ctrl.BaseCtrl.go('hello'));
  return router;
}
