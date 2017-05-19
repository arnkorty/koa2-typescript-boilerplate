import * as utils from '../utils'
import * as jwt from '../utils/jwt'
export default function m(sequelize:any, DataTypes:any) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    encrypt_password: {
      type: DataTypes.STRING
    },
    // 以下字段和钉钉一致
    // 钉钉对应的ID
    d_id: {
      type: DataTypes.INTEGER
    },
    role_id: {
      type: DataTypes.INTEGER
    },
    mobile: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    isAdmin: {
      type: DataTypes.BOOLEAN
    },
    userid: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    // 部门id 集合，需要 序列化
    department: {
      type: DataTypes.STRING
    },
    jobnumber: {
      type: DataTypes.STRING
    },
    // virtual columns
    password: {
      type: DataTypes.VIRTUAL,
      set(val:string){
        this.setDataValue('password', val);
        this.setDataValue('encrypt_password', utils.encryptPassword(val));
      }
    },
    department_ids: {
      type: DataTypes.VIRTUAL,
      get() {
        if(this.department){
          return JSON.parse(this.department);
        }else{
          return [];
        }
      }
    }
  }, {
    getterMethods: {
    },
    setterMethods: {
    },
    instanceMethods: {
      authenticate(val:string):boolean {
        return utils.comparePassword(val, this.encrypt_password);
      },
      jwt(){
        return jwt.sign({id: this.id});
      },
      canAccess(ctrl:string, action:string, methods:string){
        return true;
      }
    },
    classMethods: {
      associate: function(models:any) {
      }
    }
  });
  return User;
};
