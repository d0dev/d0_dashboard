const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');
const User = models.Auth;

exports.register = (req, res) => {
  // Validar solicitud
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: 'El nombre de usuario y la contraseña son obligatorios.'
    });
    return;
  }

  // Crear un usuario
  const user = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  };

  // Guardar el usuario en la base de datos
  User.create(user)
    .then(data => {
      res.send({ message: 'Usuario registrado exitosamente.' });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al registrar el usuario.'
      });
    });
};

exports.login = (req, res) => {
  // Validar solicitud
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: 'El nombre de usuario y la contraseña son obligatorios.'
    });
    return;
  }

  // Buscar el usuario en la base de datos
  User.findOne({ where: { username: req.body.username } })
    .then(user => {
      if (!user) {
        res.status(404).send({ message: 'Usuario no encontrado.' });
        return;
      }

      // Verificar la contraseña
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        res.status(401).send({ message: 'Contraseña incorrecta.' });
        return;
      }

      // Generar el token de acceso
      const token = jwt.sign({ id: user.id }, 'secreto', { expiresIn: 86400 }); // 24 horas

      res.send({ token });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al iniciar sesión.'
      });
    });
};
