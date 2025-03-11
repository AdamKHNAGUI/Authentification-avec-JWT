require('dotenv').config();
module.exports = {
secret: process.env.AUTH_SECRET,
jwtExpiration:60,
jwtRefreshExpiration:120,
};