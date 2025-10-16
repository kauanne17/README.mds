const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/index');

router.get('/register', (req, res) => res.render('auth/register'));
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await db.User.create({ username, password: hash });
  res.redirect('/auth/login');
});

router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username }});
  if (!user) return res.redirect('/auth/login');
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.redirect('/auth/login');
  req.session.user = { id: user.id, username: user.username };
  res.redirect('/');
});

router.post('/logout', (req, res) => {
  req.session.destroy(()=> res.redirect('/auth/login'));
});

module.exports = router;
