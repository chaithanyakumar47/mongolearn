const mongodb = require( 'mongodb' );
var MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://shazin:JUriYptkBJsrsuup@cluster0.a99pbyo.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
.then(client => {
  console.log('Connected!')
  _db = client.db()
  callback()
})
.catch(err => {
  console.log(err)
  throw err
});

};

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No database found!'
}

module.exports = {
  mongoConnect,
  getDb
}