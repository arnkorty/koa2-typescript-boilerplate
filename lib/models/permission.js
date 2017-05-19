'use strict';
module.exports = function(sequelize, DataTypes) {
  var Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    ctrl_name: DataTypes.STRING,
    action_name: DataTypes.STRING,
    methods: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Permission;
};