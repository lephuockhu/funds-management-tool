let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// create a schema
let objSchema = new Schema(
	{
		coin_name: String,
		feauture_type: { type: String, enums: ["long", "short"] },
		stoploss_usdt: Number,
		entry_price: Number,
		target_price: Number,
		stoploss_price: Number,
		leverage: Number,
		extra_info: Object,
	},
	{ timestamps: true }
);

module.exports = mongoose.models['histories'] ? mongoose.model("histories", undefined, "histories") : mongoose.model("histories", objSchema, "histories");
