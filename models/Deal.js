var Sequelize = require('sequelize');

var sequelize = new Sequelize('newbiecard_db', 'newbiecard_user','ncadmin123', {
	dialect: 'mysql',
	host: 'newbiecard-db.cwvr62aaym9p.us-west-2.rds.amazonaws.com'
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