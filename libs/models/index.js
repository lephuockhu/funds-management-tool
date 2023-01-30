var fs = require("fs");
var path = require("path");
var mongoose = require("../../configs/mongodb");
// import all schema file in this dir, except index.js
var db = {};

fs.readdirSync(path.join("libs/models"))
	.filter(function (file) {
		return file.indexOf(".js") !== 0 && file !== "index.js";
	})
	.forEach(function (file) {
		var model = require("../models/" + file);
		db[model.modelName] = model;
	});

//load model default
var my_model = require("../mongoose");

var model = new my_model(db);

//load model custom
model["custom"] = {};

module.exports = model;
