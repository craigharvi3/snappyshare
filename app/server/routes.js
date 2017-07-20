const Snappyshare = require('./controllers/snappyshare');
const Board = require('./controllers/board');
const isImage = require('is-image');
const preview = require("page-previewer");
const MongoClient = require('mongodb').MongoClient;

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    const controller = new Snappyshare(app);
    return controller.main(req, res, next);
  });

  app.get('/board/:boardId', (req, res, next) => {
    const controller = new Board(app);
    return controller.main(req, res, next);
  });

  app.get('/api/board/:boardId', (req, res, next) => {
    MongoClient.connect(process.env.SNAPPYSHARE_MONGO_URL, function(err, db) {
      var collection = db.collection('links');
      collection.find( { boardId: req.params.boardId } ).toArray(function(err, links) {
        res.send(links);
        db.close();
      });
    });
  });

  app.post('/api/board', (req, res, next) => {
    MongoClient.connect(process.env.SNAPPYSHARE_MONGO_URL, function(err, db) {
      var collection = db.collection('links');
      collection.insertMany(req.body.data);
      db.close();
      res.send({success: true});
    });
  });

  app.get('/api/link/:url', (req, res, next) => {
    preview(decodeURIComponent(req.params.url), function(err, data) {
      if(!err) {
        res.send(data);
      }
    });
  });

  // heartbeat route
  app.get('/status', (req, res) => res.send({status: 'ok'}));

  // wildcard for 404 handling
  app.get('*', (req, res, next) => {
    next(new Error(404));
  });

};
