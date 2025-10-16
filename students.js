const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', async (req, res) => {
  // join: include associated course
  const students = await db.Student.findAll({ include: db.Course });
  res.render('students/index', { students });
});

router.get('/new', async (req, res) => {
  const courses = await db.Course.findAll();
  res.render('students/new', { courses });
});

router.post('/', async (req, res) => {
  const { name, email, course_id } = req.body;
  await db.Student.create({ name, email, course_id: course_id || null });
  res.redirect('/students');
});

router.get('/:id/edit', async (req, res) => {
  const student = await db.Student.findByPk(req.params.id);
  const courses = await db.Course.findAll();
  res.render('students/edit', { student, courses });
});

router.put('/:id', async (req, res) => {
  const { name, email, course_id } = req.body;
  await db.Student.update({ name, email, course_id: course_id || null }, { where: { id: req.params.id }});
  res.redirect('/students');
});

router.delete('/:id', async (req, res) => {
  await db.Student.destroy({ where: { id: req.params.id }});
  res.redirect('/students');
});

module.exports = router;
