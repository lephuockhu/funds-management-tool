import { readdirSync } from "fs";
import { join } from "path";

// import all schema file in this dir, except index.js
let dbs = {};
readdirSync(__dirname)
	.filter(function (file) {
		return file.indexOf(".js") !== 0 && file !== "index.js";
	})
	.forEach(function (file) {
		var model = require(join(__dirname, file));
		dbs[model.modelName] = model;
	});

//load model default
import my_model from "../../../libs/mongoose";
var model = new my_model(dbs);

export default model;
