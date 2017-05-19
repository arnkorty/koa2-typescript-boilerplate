'use strict';
module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    d_parentid: DataTypes.INTEGER,
    d_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Department;
};
