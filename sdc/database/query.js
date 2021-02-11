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
var productDetails = function(id, callback) {
  var query = {
    text: `SELECT * FROM productdetails where productNum = ${id}`,
    value: []
  }

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
 var checkout = function(id, callback) {
  var query = {
    text: `SELECT * FROM checkout where userNum = ${id}`,
    value: []
  }

  client.query(query, (err, data) => {
    console.time("checkoutDB")
    if (err) {
      callback(err)
    } else {
      callback(null, data)
      console.timeEnd("checkoutDB")
      // client.end()
    }
  })
 }

module.exports = {
  productDetails, checkout
}