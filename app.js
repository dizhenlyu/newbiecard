var express = require('express');
var ejs = require('ejs');
var Dvd = require('./models/Dvd');
var Bank = require('./models/Bank');
var Card = require('./models/Card');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

// app.get('/dvds', function(req, res){
// 	Dvd.findAll({
// 		where: {
// 			title: {
// 				like: '%' + req.query.title + '%'
// 			},

// 			award: req.query.award
// 		}
// 	}).then(function(results){
// 		res.render('dvds', {
// 			dvds: results,
// 			input: req.query.title
// 		});
// 	})
// });

app.get('/getBanks', function(req, res){
	Bank.findAll().then(function(results){
		res.render('banks', {
			banks: results
		});
	})
});

// Card.belongsTo(Bank, {foreignKey: 'bank_id', targetKey: 'id'})

app.get('/getCards', function(req, res){
	Card.findAll({
		// include: [{
  //           model: Bank,
  //           as: 'banks'
  //       }],

		where: {
			bank_id: {
				like: '%' + req.query.bank_id + '%'
			},
			// 'banks.bank_id': req.query.bank_id
		}
	}).then(function(results){
		res.render('cards', {
			cards: results,
			bank_id: req.query.bank_id
		});
	})
});

app.get('/addBanks', function(req, res){
	Bank.create({
		bank_name: req.query.add_bank_name
		// req.query.add_bank_name
	}).then(function(results){
		res.render('cards', {
			cards: results,
		});
	})
});

app.get('/addCards', function(req, res){
	Card.create({
		bank_id: req.query.bank_id,
		card_name: req.query.add_card_name,
		card_offer: req.query.add_card_offer,
		card_design: req.query.add_card_design
		// req.query.add_bank_name
	}).then(function(){
		Card.findAll({
			where: {
				bank_id: req.query.bank_id
			}
		}).then(function(results){
			res.render('cards', {
				cards: results,
				bank_id: req.query.bank_id
			});
		})
	})
});

app.get('/getCardDetail', function(req, res){
	CardDetail.findAll({
		// include: [{
  //           model: Bank,
  //           as: 'banks'
  //       }],

		where: {
			bank_id: {
				like: '%' + req.query.bank_id + '%'
			},
			// 'banks.bank_id': req.query.bank_id
		}
	}).then(function(results){
		res.render('cards', {
			cards: results,
			bank_id: req.query.bank_id
		});
	})
});

app.listen(3000, function(){
	console.log('Newbie Card Demo Ver.');
	console.log('Listening to 3000');
});