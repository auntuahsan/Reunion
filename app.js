var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use('/', require('./routes/pageroutes'))
// use res.render to load up an ejs view file
app.set('port', 5000)

app.listen(5000);

console.log('App is running at http://localhost:%d', app.get('port'));
console.log('  Press CTRL-C to stop\n');
