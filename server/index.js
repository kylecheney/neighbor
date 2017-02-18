const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')();
const url = 'postgres://postgres:password@localhost:5432/Neighborhood';
const app = module.exports = express();

const massiveInstance = massive.connectSync({
  connectionString: url
});

app.set('db', massiveInstance);

console.log(massiveInstance);

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

const messageCtrl = require('./controller/messageCtrlDB.js');

//Endpoints
app.get('/main', messageCtrl.getMessages);
app.post('/main', messageCtrl.postMessage);


//Port Stuff
const port = 9001;
app.listen(port, function() {
  console.log('Serving to port ' + port);
});
