const MONGO_URL =
  "mongodb://the_username:the_password@localhost:3456/the_database";
// const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;
// const REDIS_URL = "redis://localhost:6378";
module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL, //: '//localhost:6378'
};
