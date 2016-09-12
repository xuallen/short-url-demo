var options
  , ShortURLSchema
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

options = {
	versionKey: false
};

ShortURLSchema = new Schema({
	id: {
		type: ObjectId
	},
	URL: {
		type: String,
		unique: true
	},
	hash: {
		type: String,
		unique: true
	},
	hits: {
		type: Number,
		default: 0
	},
	created_at: {
		type: Date,
		default: Date.now
	},
}, options);

ShortURLSchema.statics = {
	fetch: function(cb) {
		return this
			.find({})
			.sort("created_at")
			.exec(cb)
	}
};

module.exports = ShortURLSchema;