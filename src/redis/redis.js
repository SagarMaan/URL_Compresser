const redis = require("redis");

const redisClint = redis.createClient({
  port: 19541, // Port Number
  host: "redis-19541.c305.ap-south-1-1.ec2.cloud.redislabs.com", // Hostname
  no_ready_check: true // Check the endpoint of Redis, is it correct or not, is it working or not. By default, it is false
});

redisClint.auth("sr4IdtSew9RmCgBXIJO94UFd9VaARCcz", function (err) {
  if (err) throw err; // Auth method checks that the password provided by us during the creation of the endpoint is the same as the password passed in it.
});

redisClint.on("connect", async function () {
  console.log("connected to redis");
});

module.exports = redisClint;
