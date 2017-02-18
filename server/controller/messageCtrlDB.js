const app = require('./../index.js');
const db = app.get('db');

module.exports = {
  // getMessages: function (req, res, next) {
  //   db.get_messages(function (err, message) {
  //     res.status(200).json(message);
  //   });
  // },
  getMessages: function (req, res, next) {
    db.run('SELECT * FROM messages', function (err, message) {
      res.status(200).json(message);
    });
  },
  postMessage: function (req, res, next) {
    db.run('INSERT INTO MESSAGES (message) VALUES ($1)', function(err, message) {
      res.status(200).send('Message Submitted');
    });
  }
};
