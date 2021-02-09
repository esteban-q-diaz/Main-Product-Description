const fs = require ('fs');
const csvWriter = require('csv-write-stream')
var writer = csvWriter();
var faker = require('faker')
var counter = 0;

const dataGen = () => {
  console.time('checkout')
  // writer.pipe(fs.createWriteStream('checkout.csv'));
  writer.pipe(fs.createWriteStream('/Volumes/My Passport for Mac/Other/hackreactor/sdc'));
  let num = faker.random.number({ min: 1000, max: 9999 })
  for (var i = 0; i < 5; i++) {
    writer.write({
      // userNum: faker.random.number({ min: 1000, max: 9999 }),
      activeUser: faker.name.findName(),
      wishList: `{${faker.random.number({ min: 1000, max: 9999 })}}`,
      watchList: `{${faker.random.number({ min: 1000, max: 9999 })}}`,
      userCart: `{${faker.random.number({ min: 1000, max: 9999 })}, ${faker.random.number({ min: 1000, max: 9999 })}, ${faker.random.number({ min: 1000, max: 9999 })}, ${faker.random.number({ min: 1000, max: 9999 })}}`
    })
    console.log("currently on : ", i)
  }
  console.timeEnd('checkout')
  writer.end();
  console.log('done')
}

dataGen()