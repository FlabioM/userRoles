'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.Permission, {
        through: models.RolePermission,
        as: 'permission',
        foreignKey: 'role_id',
        otherKey: 'permission_id'
      })
    }
  };
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: false,
    tableName:'roles_roles'
  });
  return Role;
};