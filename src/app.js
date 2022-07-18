const path = require('path');
const express = require('express');
const app = express();

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
app.listen(3000, () => {
  console.log("server running on port 3000");
})