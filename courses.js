const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', async (req, res) => {
  const courses = await db.Course.findAll();
  res.render('courses/index', { courses });
});

router.get('/new', (req, res) => res.render('courses/new'));
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  await db.Course.create({ name, description });
  res.redirect('/courses');
});

router.get('/:id/edit', async (req, res) => {
  const course = await db.Course.findByPk(req.params.id);
  res.render('courses/edit', { course });
});

router.put('/:id', async (req, res) => {
  const { name, description } = req.body;
  await db.Course.update({ name, description }, { where: { id: req.params.id }});
  res.redirect('/courses');
});

router.delete('/:id', async (req, res) => {
  // if students associated, set course_id to NULL (handled by FK ON DELETE SET NULL)
  await db.Course.destroy({ where: { id: req.params.id }});
  res.redirect('/courses');
});

module.exports = router;
