var express = require('express')
var app = express()


var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.get('/test/:id/:name', function(req, res) {
    res.json({
        id: req.params.id,
        name: req.params.name
    });
})


var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})