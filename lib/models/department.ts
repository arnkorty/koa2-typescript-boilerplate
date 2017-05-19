export default function m(sequelize:any, DataTypes:any) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    d_parentid: DataTypes.INTEGER,
    d_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models:any) {
        // associations can be defined here
      }
    }
  });
  return Department;
};
