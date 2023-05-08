const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { getUsers, signup, signin } = require('../controllers/users-controller');

router.get('/', getUsers);

router.post(
  '/signup',
  [
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup
);

router.post('/signin', signin);

module.exports = router;
