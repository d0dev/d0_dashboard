module.exports = app => {
  const authController = require('../controllers/auth.controller.js');
  const verifyToken = require('../utils/verifyToken.js');


  var router = require("express").Router();
 
    // Rutas de autenticación
  router.post('/register', authController.register);
  router.post('/login', authController.login);

    // Protected routes example
    router.get('/protected-route', verifyToken, (req, res) => {
      res.send({
        message: GetNumPlayerIndices()
      });
    });

  app.use('/api/auth', router);
};