const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongoDb";

const client = new MongoClient(uri);

let database;

async function mongoConnect() {
	try {
		await client.connect();
		console.log(`Successfully connect to mongo`);
		database = client.db("Instagram_Project");

		return client;
	} catch (error) {
		await client.close();
		console.log(`Error while connect to mongo`);
		throw error;
	}
}

function getDatabase() {
	return database;
}

module.exports = {
	mongoConnect,
	getDatabase,
};
