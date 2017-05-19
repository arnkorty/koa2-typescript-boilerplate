export default function m(sequelize:any, DataTypes:any) {
  var Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    ctrl_name: DataTypes.STRING,
    action_name: DataTypes.STRING,
    methods: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models:any) {
        // associations can be defined here
      }
    }
  });
  return Permission;
};
