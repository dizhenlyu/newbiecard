var Sequelize = require('sequelize');

var sequelize = new Sequelize('newbiecard_db', 'newbiecard_user','fighton123', {
	dialect: 'mysql',
	host: 'db.newbiecard.com'
});

// var Card =  sequelize.import(__dirname + "/Card");

var Bank = sequelize.define('banks', {
	id: {
		field: 'bank_id',
		type: Sequelize.INTEGER
	},

	bank_name: {
		field: 'bank_name',
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

module.exports = Bank;