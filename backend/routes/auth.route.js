const { Router } = require('express');
const { check } = require('express-validator');
const { login, signup } = require('../controllers/auth.controller');
const router = Router();

router.post('/signup', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
], signup);

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
], login);

module.exports = router;