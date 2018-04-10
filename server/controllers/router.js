const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const {basicStrategy, jwtStrategy} = require('./strategies');

const router = express.Router();

const jsonParser = bodyParser.json();

const UsersController = require('./users');
const AuthController = require('./auth');
const ComicController = require('./comics');

//Register User
router.post('/register', jsonParser, UsersController.register);

//Login User
router.post('/login', passport.authenticate('basic', {session: false}), AuthController.login);

//Refresh Token
router.post('/refresh', passport.authenticate('jwt', {session: false}), AuthController.refresh);

//Add Entry
//router.post('/add', [passport.authenticate('jwt', {session: false}), jsonParser],UsersController.addEntry);

router.post('/comic', [passport.authenticate('jwt', {session: false}), jsonParser],ComicController.addComic);

module.exports = {router, basicStrategy, jwtStrategy};
