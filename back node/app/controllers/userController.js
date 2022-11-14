module.exports.getUsuarios = function (application, req, res) {
  var connection = application.config.dbConnection();
  var userModel = new application.app.models.UserModel(connection);

  userModel.getUsuarios(function (error, result) {
    if (error) {
      res.send(error);
    }
    console.log(result);
    return res.json(result);
  });
}

module.exports.getUsuarioByEmail = function (application, req, res, email) {
  var params = req.params;
  var connection = application.config.dbConnection();
  var userModel = new application.app.models.UserModel(connection);

  userModel.getUsuarioByEmail(params.email, function (error, result) {
    if (result.length > 0) {
      return res.json(result[0], 200);
    }
    return res.json(result);
  });
}

module.exports.register = function (application, req, res) {
  var usuario = req.body;
  var connection = application.config.dbConnection();
  var userModel = new application.app.models.UserModel(connection);

  userModel.insertUser(usuario, function (error, result) {
    try {
      if (result) {
        return res.json(result, 201);
      } else {
        return res.json(error, 500);
      }
    } catch (error) {
      res.send(error);
    }
  });
}

module.exports.login = function (application, req, res) {
  var usuario = req.body;
  var connection = application.config.dbConnection();
  var userModel = new application.app.models.UserModel(connection);

  userModel.login(usuario, function (error, result) {
    try {
      if (result.length > 0) {
        return res.json({ user: result[0] }, 200);
      } else {
        return res.json({ user: null }, 401);
      }
    } catch (error) {
      return res.json({ error: 'Usuário não encontrado' });
    }
    // close connection
  });
}

