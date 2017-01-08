const app = require('../index.js');
const dbMessages = app.get('db');

module.exports = {
  postMessage: function (req, res) {
    dbMessages.create_message(req.body.message, function(err, message) {
      res.status(200).send;
    })
  }
  getMessages: function (req, res) {
    dbMessages.get_messages(function (err, messages) {
      res.status(200).json();
    })
  }
};
