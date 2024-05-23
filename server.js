const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const artistsController = require('./controllers/artists');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.send('Welcome to API!');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017', function(err){
	if (err) {
		return console.log(err);
	}
	app.listen(3001, () => {
		console.log('Server started on port 3001.');
	});
});
