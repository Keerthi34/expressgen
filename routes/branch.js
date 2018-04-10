const mongoose = require('mongoose');

// Genre Schema
const branchSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
  id:{
		type: String,

	},
});

const Branch = module.exports = mongoose.model('Branch', branchSchema);

// Get Genres
module.exports.getBranch = function(callback, limit)  {
	Branch.find(callback).limit(limit);
}

// Add Genre
module.exports.addBranch = function(branch, callback)  {
	Branch.create(genre, callback);
}

// Update Genre
module.exports.updateBranch = function(id, genre, options, callback) {
	var query = {_id: id};
	var update = {
		name: branch.name
	}
	Branch.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeBranch = function(id, callback) {
	var query = {_id: id};
	Branch.remove(query, callback);
}
