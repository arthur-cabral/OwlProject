function UserModel(connection) {
  this._connection = connection;
}

UserModel.prototype.getUsuarios = function (callback) {
  connection.query('SELECT * FROM users', callback);
}

UserModel.prototype.getUsuarioByEmail = function (email, callback) {
  connection.query('SELECT * FROM users WHERE emailU = ?', email, callback);
}

UserModel.prototype.insertUser = function (usuario, callback) {
  connection.query('INSERT INTO users VALUES (?,?,?,?)', [usuario.idU, usuario.nameU, usuario.emailU, usuario.passwordU], callback);
}

UserModel.prototype.login = function (usuario, callback) {
  connection.query('SELECT * FROM users WHERE emailU = ? AND passwordU = ?', [usuario.emailU, usuario.passwordU], callback);
}

module.exports = function () {
  return UserModel;
}