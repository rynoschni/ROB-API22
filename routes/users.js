var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* User Login */
router.post('/', async function (req, res, next) {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    if (user.password === password) {
      res.json(user)
    }
  } else {
    res.json({message: `No user found with the email ${email}` })
  }
});

//User signup
router.post('/signup', async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({ firstName: firstName, lastName: lastName, email: email, password: password });
  res.json(user)
})

module.exports = router;
