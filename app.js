var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public' + '/index.html'))

// Listening on 20205
app.listen(20205, function() {
    console.log('Example app listening on port 20205!');
});

// Using Static Public Libraries.
app.use(express.static('public'));