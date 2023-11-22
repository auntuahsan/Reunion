var express = require('express');
var app = express();
const cors = require('cors')
var bodyParser = require("body-parser");


app.use(cors({
    credentials: true,
    origin: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use('/', require('./routes/pageroutes'))
app.use('/', require('./routes/jsonRoutes'))
// use res.render to load up an ejs view file

app.set('port', 5000);
app.listen(5000);

console.log('App is running at http://localhost:%d', app.get('port'));
console.log('  Press CTRL-C to stop\n');

