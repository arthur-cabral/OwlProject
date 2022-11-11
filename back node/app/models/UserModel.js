function UserModel(connection) {
  this._connection = connection;
}

UserModel.prototype.getUsuarios = function (callback) {
  connection.query('SELECT * FROM users', callback);
}

UserModel.prototype.getUsuario = function (id, callback) {
  connection.query('SELECT * FROM users WHERE idU = ?', id, callback);
}

UserModel.prototype.insertUser = function (usuario, callback) {
  connection.query('INSERT INTO users SET ?', usuario, callback);
}

UserModel.prototype.login = function (usuario, callback) {
  connection.query('SELECT * FROM users WHERE emailU = ? AND passwordU = ?', [usuario.email, usuario.password], callback);
}

module.exports = function () {
  return UserModel;
}