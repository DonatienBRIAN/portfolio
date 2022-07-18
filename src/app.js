const path = require('path');
const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 4000));
const publicDirectorypath = path.join(__dirname, '../public');
var portfolio = require("../public/json/portfolio.json");

app.use(express.static(publicDirectorypath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', portfolio);
  })
  app.get('/CV', async (req, res) => {
    res.sendFile(path.join(publicDirectorypath + '/autres/CV_Donatien_BRIAN.pdf'));
  });
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });