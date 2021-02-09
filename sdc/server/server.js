const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path')
const db = require('/Users/rebrnd/Documents/Hack_Reactor/Immersive/Week_9/sdc/Main-Product-Description/sdc/database/query.js');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//this is needed to make the public folder available to the server
app.use('/', express.static(path.join(__dirname, '..', 'public')));

/* ----- GET PRODUCT DETAILS DATA --- */

app.get('/api/productdetails', (req, res) => {
  db.productDetails((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data.rows)
    }
  })
});

/* ----- GET CHECKOUT DATA --- */

app.get('/api/checkout', (req, res) => {
  db.checkout((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data.rows)
    }
  })
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err');
  } else {
    console.log(`Connected on localhost:${PORT}`);
  }
});

module.exports = app;