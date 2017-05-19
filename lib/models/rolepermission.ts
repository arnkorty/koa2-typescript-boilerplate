export default function(sequelize:any, DataTypes:any) {
  var RolePermission = sequelize.define('RolePermission', {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models:any) {
        // associations can be defined here
      }
    }
  });
  return RolePermission;
};
