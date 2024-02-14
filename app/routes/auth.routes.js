module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  // const authController = require('../controllers/auth.controller.js');


  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

    // Rutas de autenticación
  // router.post('/register', authController.register);
  // router.post('/login', authController.login);

  app.use('/api', router);
};
