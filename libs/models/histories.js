import { Schema as _Schema, model } from "mongoose";
let Schema = _Schema;

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

//Create a model using it
const histories = model("histories", objSchema, "histories"); // model name, schema name, collection name

export default histories;
