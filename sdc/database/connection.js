const { Client } = require('pg')

const client = new Client ({
  user: "rebrnd",
  password: 'cowboyz',
  host: "localhost",
  port: 5432,
  database: "leggosdc",
});

/* ----- PRODUCT DETAILS -----*/
const query = {
  text: 'INSERT INTO productdetails(productNum, productName, productPrice, productRating, productReviewCount, productInStock, productBackOrder, productStockLimitations, productExclusiveTags, productSeriesTags, seriesName, seriesImage, productAgeRatingBottom, productAgeRatingTop, productPieceCount, vipPoints, chokeWarning, offersFlyer, signUpOffer, offersImageLink) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
  values: [10276, 'Colosseum', 549.99, 4.5, 61, 10, 0, 2, 'New/Exclusives', 'Adults Welcome/Buildings/Creator Expert', 'creator-expert', 'https://fecphoto.s3.us-east-2.amazonaws.com/creator_logo_pos_300w.png', 18, 99, 9036, 3575, 0, 'VIP Only! Get a FREE Chariot when you purhcase the exclusive new Colosseum.*', 1, 'https://fecphoto.s3.us-east-2.amazonaws.com/BFCM-live-Promo-Badge-3.png']
}

const deleteQuery = {
  text: 'DELETE FROM productdetails',
  values: []
}

const csvCheckoutImport = {
  text: "COPY productdetails FROM '/Users/rebrnd/Documents/Hack_Reactor/Immersive/Week_9/sdc/Main-Product-Description/sdc/data_generator/productdetails_p2.csv' DELIMITER ',' CSV HEADER",
  values: []
 }


// const csvProductDetailsExternal = {
//   text: "COPY productdetails (productName, productPrice, productRating, productReviewCount, productInStock, productBackOrder) FROM '/Users/rebrnd/Documents/Hack_Reactor/Immersive/Week_9/sdc/Main-Product-Description/sdc/data_generator/productdetails_pt2.csv' DELIMITER ',' CSV HEADER",
//   values: []
//   }


// Promises
client.connect()
  .then(console.time('checkout'))
  .then(() => console.log('Connected Database Successfully'))
  .then(() => client.query(csvCheckoutImport))
  .then(() => client.query("select * from productdetails"))
  .then((results) => console.table(results.rows))
  .then(console.timeEnd('checkout'))
  .catch(e => console.log(e))
  .finally(() => client.end())


/* ----- CHECKOUT -----*/
  // const checkout = {
  //   text: 'INSERT INTO productdetails(productNum, productName, productPrice, productRating, productReviewCount, productInStock, productBackOrder, productStockLimitations, productExclusiveTags, productSeriesTags, seriesName, seriesImage, productAgeRatingBottom, productAgeRatingTop, productPieceCount, vipPoints, chokeWarning, offersFlyer, signUpOffer, offersImageLink) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
  //   values: [10276, 'Colosseum', 549.99, 4.5, 61, 10, 0, 2, 'New/Exclusives', 'Adults Welcome/Buildings/Creator Expert', 'creator-expert', 'https://fecphoto.s3.us-east-2.amazonaws.com/creator_logo_pos_300w.png', 18, 99, 9036, 3575, 0, 'VIP Only! Get a FREE Chariot when you purhcase the exclusive new Colosseum.*', 1, 'https://fecphoto.s3.us-east-2.amazonaws.com/BFCM-live-Promo-Badge-3.png']
  // }

  // const deleteCheckout = {
  //   text: 'DELETE FROM checkout',
  //   values: []
  // }

  // const csvCheckoutImport = {
  //   text: "COPY checkout (activeUser, wishList, watchList, userCart)  FROM '/Users/rebrnd/Documents/Hack_Reactor/Immersive/Week_9/sdc/Main-Product-Description/sdc/data_generator/checkout_pt1.csv' DELIMITER ',' CSV HEADER",
  //   values: []
  //  }

  //  const csvCheckoutImportExternal = {
  //   text: "COPY checkout (activeUser, wishList, watchList, userCart)  FROM '/Volumes/My Passport for Mac/Other/hackreactor/sdc/checkout_pt2.csv' DELIMITER ',' CSV HEADER",
  //   values: []
  //  }


// execute()

// Async Await
// async function execute() {
//   try {
//     console.time('checkout')
//     await client.connect()
//     console.log('Connected successfully')
//     // await client.query(csvCheckoutImport)
//     const results = await client.query('select * from checkout where userNum = 10000000')
//     console.table(results.rows)
//   }
//   catch (ex) {
//     console.log(`Something wrond happend ${ex}`)
//   }
//   finally {
//     console.timeEnd('checkout')
//     await client.end()
//     console.log('disconnected successfully')
//   }
// }
