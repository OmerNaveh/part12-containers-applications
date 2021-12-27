const MONGO_URL = "mongodb://the_user:the_password@127.0.0.1:3456/database";
// const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;
module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL, //: '//localhost:6378'
};
