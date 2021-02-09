const { Client } = require('pg')

const client = new Client ({
  user: "rebrnd",
  password: 'cowboyz',
  host: "localhost",
  port: 5432,
  database: "leggosdc",
});

client.connect()

/* ----- data from the product details table ------*/
var productDetails = function(callback) {
  var query = 'SELECT * FROM productdetails'

  client.query(query, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
      // client.end()
    }
  })
 }

 /* ----- data from the checkout table ------*/
 var checkout = function(callback) {
  // client.connect()
  var query = 'SELECT * FROM checkout'

  client.query(query, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
      // client.end()
    }
  })
 }



module.exports = {
  productDetails, checkout
}