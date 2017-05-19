import * as Sequelize from 'sequelize';
import { dbConfig } from '../configs';
import {logger} from '../configs';
let config:any = (<any>dbConfig)[process.env.NODE_ENV || 'development'];
export const sequelize = new Sequelize(config.database, config.username, config.password,{
  host: config.host,
  dialect: config.dialect,
  pool: config.pool,
});

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
export var db:any = {};
fs
  .readdirSync(__dirname)
  .filter(function(file:string) {
    return (file.indexOf('.') !== 0) && (file !== basename) && ['.ts', '.js'].indexOf(file.slice(-3)) > -1;
  })
  .forEach(function(file:string) {
    var model:any = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName:string) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
// module.exports = exports = db;
