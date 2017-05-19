'use strict';
export default function(sequelize:any, DataTypes:any) {
  var UserRole = sequelize.define('UserRole', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models:any) {
        UserRole.belongsTo(models.User,{foreignKey: 'user_id'})
        UserRole.belongsTo(models.Role,{foreignKey: 'role_id'})
        // associations can be defined here
      }
    }
  });
  return UserRole;
};
