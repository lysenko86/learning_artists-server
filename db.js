const MongoClient = require('mongodb').MongoClient;

const dbName = 'artists-db';
const state = {
	db: null
};

exports.connect = function (url, done) {
	if (state.db) {
		return done();
	}

	MongoClient.connect(url, function (err, client) {
		if (err) {
			return done(err);
		}
		state.db = client.db(dbName);
		done();
	});
};

exports.get = function () {
	return state.db;
};
