module.exports = function (application) {

  application.get('/user', function (req, res) {
    application.app.controllers.userController.getUsuarios(application, req, res);
  });

  application.get('/user/:email', function (req, res) {
    var email = req.params.email;
    application.app.controllers.userController.getUsuarioByEmail(application, req, res, email);
  });

  application.post('/user/register', function (req, res) {
    application.app.controllers.userController.register(application, req, res);
  });

  application.post('/user/login', function (req, res) {
    application.app.controllers.userController.login(application, req, res);
  });
}