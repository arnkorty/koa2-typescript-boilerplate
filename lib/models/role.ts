export default function(sequelize:any, DataTypes:any) {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    scope: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models:any) {
        // associations can be defined here
      }
    }
  });
  return Role;
};
