const mongoose = require("mongoose");

const connectionString = [
	"mongodb://",
	process.env.DATABASE_USER,
	":",
	process.env.DATABASE_PASS,
	"@",
	process.env.DATABASE_HOST,
	":",
	process.env.DATABASE_PORT,
	"/",
	process.env.DATABASE_NAME,
].join("");
console.log("connectionString :>> ", connectionString);

var options = {
	readPreference: "secondaryPreferred", // https://docs.mongodb.com/manual/core/read-preference/#secondaryPreferred
	maxStalenessSeconds: 120, // Min: 120 // https://docs.mongodb.com/manual/core/read-preference-staleness/#replica-set-read-preference-max-staleness
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	autoIndex: false, // Don't build indexes
	keepAlive: true,
	poolSize: 10, // Maintain up to 10 socket connections
	family: 4, // Use IPv4, skip trying IPv6
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	bufferMaxEntries: 0,
};

mongoose
	.connect(encodeURI(connectionString), options)
	.then(() => {
		console.log("\x1b[35m[MongoDB]\x1b[0m MongoDB connected and ready to use...");
	})
	.catch((err) => {
		console.error("Connect database failed with error:", err.stack);
		process.exit(1);
	});
mongoose.connection.on("error", console.error.bind(console, "connection error:"));

if (process.env.ENV == "local") {
	mongoose.set("debug", true);
}

module.exports = mongoose;
