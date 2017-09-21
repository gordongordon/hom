var express = require('express');

var compression = require('compression')
//var express = require('express')
//var app = express()

// Create our app
var app = express();
// For compression
app.use(compression({
  threshold: 10240,
  filter: function () { return true; },
  level: 9
}));


// app.use(compression({filter: shouldCompress}))
// Gordon
// function shouldCompress (req, res) {
//    if (req.headers['x-no-compression']) {
//        // don't compress responses with this request header
//        return false
//    }
//
//   // fallback to standard filter function
//    return compression.filter(req, res)
//  }
app.use(express.static(__dirname +'/public'));
//app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
    res.status(200).send('doing ok');
  } else {
    next();
    res.status(200).send('doing ok');
  }
});

//app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});



// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
//
// app.listen(process.env.PORT || 3000);
