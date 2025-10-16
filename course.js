module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT }
  }, { tableName: 'courses', timestamps: false });
  return Course;
};
