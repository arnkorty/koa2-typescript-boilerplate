'use strict';
module.exports = function(sequelize, DataTypes) {
  var RolePermission = sequelize.define('RolePermission', {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RolePermission;
};