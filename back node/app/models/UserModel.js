function UserModel(connection) {
  this._connection = connection;
}

UserModel.prototype.getUsuarios = function (callback) {
  connection.query('SELECT * FROM users', callback);
}

UserModel.prototype.getUsuario = function (id, callback) {
  connection.query('SELECT * FROM users WHERE idU = ?', id, callback);
}

module.exports = function () {
  return UserModel;
}