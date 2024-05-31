const Redis = require("ioredis");

const redis = new Redis({
	port: process.env.REDIS_PORT,
	host: process.env.REDIS_HOST || "redis_host",
	password: process.env.REDIS_PASSWORD || "password",
});

redis.on("conect", () => {
	console.log("Succes connect redis");
});

redis.on("error", (error) => {
	console.error("Error connecting to Redis", error);
});

module.exports = redis;
