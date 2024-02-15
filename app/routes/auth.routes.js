module.exports = app => {
  const authController = require('../controllers/auth.controller.js');


  var router = require("express").Router();
 
    // Rutas de autenticación
  router.post('/register', authController.register);
  router.post('/login', authController.login);

  app.use('/api', router);
};