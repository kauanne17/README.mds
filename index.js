const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME || 'crud_ejs_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
  });

const db = { Sequelize, sequelize, models: {} };

db.User = require('./user')(sequelize, DataTypes);
db.Course = require('./course')(sequelize, DataTypes);
db.Student = require('./student')(sequelize, DataTypes);

// relations
db.Course.hasMany(db.Student, { foreignKey: 'course_id' });
db.Student.belongsTo(db.Course, { foreignKey: 'course_id' });

module.exports = db;
