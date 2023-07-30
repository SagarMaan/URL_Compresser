const redis = require("redis")

const redisClint = redis.createClient(
  17108,  // Port Number
    "redis-17108.c305.ap-south-1-1.ec2.cloud.redislabs.com", // End Point
    { no_ready_check: true } // Check the end point of redis is it correct or not is it working or not .ByDefault it is false 
  );
  redisClint.auth("1K8tVZd6On8grxnunTCbKnB4xek7mbfD", function (err) {
    if (err) throw err; // Auth method check that the password provide bys us during the creation of end poit is same as the password pass in it ..
  });
  
  redisClint.on("connect", async function () {
    console.log("connected to redis");
  });

  module.exports = redisClint


//   alias : redis-cli -u redis://default:redis-17108.c305.ap-south-1-1.ec2.cloud.redislabs.com:17108