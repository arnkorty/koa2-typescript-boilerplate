interface Iconfig {
  username: string,
  password?: string,
  database: string,
  host?:string,
  dialect: string,
  pool?:any
}
interface Iconfigs{
  development: Iconfig,
  test: Iconfig,
  production: Iconfig,
}
export const dbConfig:Iconfigs = {
  development: {
    username: process.env.DATABASE_USERNAME_DEV || 'root',
    password: process.env.DATABASE_PASSWORD_DEV || '',
    database: process.env.DATABASE_NAME_DEV || 'yycrm_dev',
    host: process.env.DATABASE_HOST_DEV || '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
  test: {
    username: process.env.DATABASE_USERNAME_TEST || 'yycrm_tester',
    password: process.env.DATABASE_PASSWORD_TEST || 'yycrm_tester',
    database: process.env.DATABASE_NAME_TEST || 'yycrm_test',
    host: process.env.DATABASE_HOST_TEST || '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME_PRO,
    password: process.env.DATABASE_PASSWORD_PRO,
    database: process.env.DATABASE_NAME_PRO,
    host: process.env.DATABASE_HOST_PRO,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 5,
      idle: 30000
    }
  }
};
exports.dbConfig= module.exports =  dbConfig;
export default dbConfig;
module.exports.dbConfig = dbConfig;
