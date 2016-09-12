var ShortURL = require("../models/shortURL");
var shortId = require('shortid');

exports.creatShortUrl = function(req, res) {
	var _shortUrl = req.query;
	ShortURL.findOne({
		URL: _shortUrl.url
	}, function(err, shortUrl) {
		if(err || !shortUrl){
			_shortUrl.hash = shortId.generate();
			_shortUrl.URL = _shortUrl.url;
			console.log(_shortUrl);
			var shortUrl = new ShortURL(_shortUrl);
			shortUrl.save(function(err, shortUrl) {
				if (err) {
					console.log(err);
				}else{
					console.log("add msg success");
					res.json({
						'statusCode' :200,
						'data' : shortUrl
					});
				}
			});
		}else{
			res.json({
				'statusCode' :200,
				'data' : shortUrl
			});
		}
	});
};

exports.getLongURL = function(req, res) {
	var hash = req.url.slice(1);
	ShortURL.findOne({
		hash: hash
	}, function(err, shortUrl) {
		if(err || !shortUrl){
			res.json({
				statusCode: 404,
				message: '没有对应的长链接哦！'
			});
		}else{
			res.redirect(shortUrl.URL);
		}
	});
};

exports.fetchShortUrl = function(req, res) {
	ShortURL.fetch(function(err, shortUrls) {
		if (err){
			console.log(err);
			res.json({
				statusCode: 500,
				err: err
			});
		}else{
			res.json({
				statusCode: 200,
				data: shortUrls
			});
		}
	});
};
