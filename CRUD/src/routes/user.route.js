//const {Router} = require('express');
//const route = Router();
//const PruebaCtrl = require('../controllers/prueba.controllers');

const express = require('express');
const route = express.Router();
const PruebaCtrl = require('../controllers/user.controllers');

route.post('/', PruebaCtrl.create);
route.get('/', PruebaCtrl.find);
route.get('/:id', PruebaCtrl.findId);
route.put('/:id',PruebaCtrl.update);
route.delete('/:id', PruebaCtrl.delete);

module.exports = route