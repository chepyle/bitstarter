var express = require('express');
var fs = requrie('fs');
var app = express();
var buf  = fs.readFileSync('index.html');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    
  response.send(buf.toString());

 })

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
