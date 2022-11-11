module.exports = function (application) {

  application.get('/user', function (req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserModel(connection);

    userModel.getUsuarios(function (error, result) {
      if (error) {
        res.send(error);
      }
      console.log(result);
      return res.json(result);
    });

  });

  application.get('/user/:id', function (req, res) {

    // add params
    var params = req.params;
    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserModel(connection);

    userModel.getUsuario(params.id, function (error, result) {
      return res.json(result);
    });

  });

  application.post('/user/register', function (req, res) {

    var usuario = req.body;
    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserModel(connection);

    userModel.insertUser(usuario, function (error, result) {
      if (error) {
        res.send(error);
      }
      return res.json(result);
    });

  });

  //login
  application.post('/user/login', function (req, res) {

    var usuario = req.body;
    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserModel(connection);

    userModel.login(usuario, function (error, result) {
      try {
        if (result.length > 0) {
          return res.json({ status: 200, user: result[0] });
        } else {
          return res.json({ status: 404, user: null });
        }
      } catch (error) {
        return res.json({ error: 'Usuário não encontrado' });
      }
      // close connection
    });
  });
}