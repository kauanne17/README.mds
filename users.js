const express = require('express');
const router = express.Router();
const db = require('../models/index');

// list users
router.get('/', async (req, res) => {
  const users = await db.User.findAll();
  res.render('users/index', { users });
});

// edit user (update password)
router.get('/:id/edit', async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  res.render('users/edit', { user });
});

router.put('/:id', async (req, res) => {
  const { password } = req.body;
  if (password && password.length > 0) {
    const bcrypt = require('bcrypt');
    const hash = await bcrypt.hash(password, 10);
    await db.User.update({ password: hash }, { where: { id: req.params.id }});
  }
  res.redirect('/users');
});

// delete user
router.delete('/:id', async (req, res) => {
  await db.User.destroy({ where: { id: req.params.id }});
  res.redirect('/users');
});

module.exports = router;
