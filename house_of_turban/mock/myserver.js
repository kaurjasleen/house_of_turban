let express = require("express");
let app = express();
var bodyParser = require('body-parser');
const port = 8080;
var itemsInfo = require('./src/itemsInfo.json');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/itemsInfo', function(req, response) {
    const data = itemsInfo;
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(data);

});

var listener = app.listen(port, function () {
  console.log('Listening on port ' + listener.address().port);
});
