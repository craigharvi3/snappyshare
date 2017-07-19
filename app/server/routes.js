const Snappyshare = require('./controllers/snappyshare');
const scrape = require('html-metadata');
const isImage = require('is-image');
const preview = require("page-previewer");

module.exports = (app) => {

  app.get('/', (req, res, next) => {
		const controller = new Snappyshare(app);
		return controller.main(req, res, next);
	});

  app.get('/meta', (req, res, next) => {
    var url = "https://cdn.vox-cdn.com/thumbor/ZIspYmVlXr6shMEkTlktICoDjzU=/0x0:1920x1280/1200x800/filters:focal(862x123:1168x429)/cdn.vox-cdn.com/uploads/chorus_image/image/55721909/013_Mayweather_vs_McGregor_Press_Conference.0.jpg";
    var url2 = "https://github.com/myspace/page-previewer";
    var url3 = "http://mmajunkie.com/";
    var url4 = "http://mmajunkie.com/2017/07/floyd-mayweather-underhanded-tactics-conor-mcgregor-victor-ortiz";

    preview(url, function(err, data) {
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
