function UserModel(connection) {
  this._connection = connection;
}

UserModel.prototype.getUsuarios = function (callback) {
  connection.query('SELECT * FROM users', callback);
}

UserModel.prototype.getUsuario = function (id, callback) {
  connection.query('SELECT * FROM users WHERE idU = ?', id, callback);
}

UserModel.prototype.salvarUsuario = function (usuario, callback) {
  connection.query('INSERT INTO users SET ?', usuario, callback);
}

module.exports = function () {
  return UserModel;
}