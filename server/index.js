const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const connectionString = 'postgres://postgres@localhost:9001/Neighborhood';

const app = module.exports = express();

const massiveInstance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', massiveInstance);

app.use(cors());
app.use(bodyParser());

app.use(express.static(__dirname + '/../public'));

const messageCtrl = require ('./controller/messageCtrlDB.js');


app.GET('/main', messageCtrl.getMessages);
app.POST('/main', messageCtrl.postMessage);



const port = 8080;

app.listen(port, function() {
  console.log('Serving to port ' + port);
});
