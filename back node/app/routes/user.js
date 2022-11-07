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

  // application.post('/user', function (req, res) {
  //   var connection = application.config.dbConnection();
  //   var userModel = new application.app.models.UserModel(connection);

  //   userModel.insertUsuario(req.body, function (error, result) {
  //     return res.json(result);
  //   });
  // });
}