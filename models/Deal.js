var Sequelize = require('sequelize');

var sequelize = new Sequelize('newbiecard_db', 'newbiecard_user','fighton123', {
	dialect: 'mysql',
	host: 'db.newbiecard.com'
});

// var Card =  sequelize.import(__dirname + "/Card");

var Deal = sequelize.define('deals', {
	id: {
		field: 'deal_id',
		type: Sequelize.INTEGER
	},

	deal_dest: {
		field: 'deal_dest',
		type: Sequelize.STRING
	},

	deal_amount: {
		field: 'deal_amount',
		type: Sequelize.STRING
	},

	link: {
		field: 'link',
		type: Sequelize.STRING
	}


}, {
	timestamps: false,
	// classMethods: {
	// 	associate: function(models) {
	// 		return Bank.hasMany(models.Card, {foreignKey : 'bank_id'});
	// 	}
 //    }
	
});

module.exports = Deal;