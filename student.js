module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    course_id: { type: DataTypes.INTEGER, allowNull: true }
  }, { tableName: 'students', timestamps: false });
  return Student;
};
