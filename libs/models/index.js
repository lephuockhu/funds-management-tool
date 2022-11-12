const fs = require("fs");

let dbs = {};

fs.readdirSync("./libs/models").forEach(function (fileName) {
	if (fileName.indexOf(".js") !== 0 && fileName !== "index.js") {
		var model = require(`./${fileName}`);
		dbs[model.modelName] = model;
	}
});

//load model default
import my_model from "../mongoose";
var models = new my_model(dbs);

export default models;
