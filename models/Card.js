var Sequelize = require('sequelize');
// var Bank = require(__dirname + '/Bank');

var sequelize = new Sequelize('newbiecard_db', 'newbiecard_user','fighton123', {
	dialect: 'mysql',
	host: 'db.newbiecard.com'
});

// var Bank = sequelize.import(__dirname + "/Bank");

var Card = sequelize.define('cards', {
	id: {
		field: 'card_id',
		type: Sequelize.INTEGER
	},

	card_name: {
		field: 'card_name',
		type: Sequelize.STRING
	},

	card_design: {
		field: 'card_design',
		type: Sequelize.STRING
	},

	card_offer: {
		field: 'card_offer',
		type: Sequelize.STRING
	},

	bank_id: {
		field: 'bank_id',
		type: Sequelize.STRING
	}
}, {
	timestamps: false,
	classMethods: {
		associate: function(models) {
			return Card.belongsTo(models.Bank, {foreignKey: 'bank_id', targetKey: 'id'});
		}
    }
});

// Card.belongsTo(Bank.Bank, {foreignKey: 'bank_id', targetKey: 'id'});
		
module.exports = Card;