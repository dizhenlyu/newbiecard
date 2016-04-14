var Sequelize = require('sequelize');

var sequelize = new Sequelize('newbiecard_db', 'newbiecard_user','ncadmin123', {
	dialect: 'mysql',
	host: 'newbiecard-db.cwvr62aaym9p.us-west-2.rds.amazonaws.com'
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