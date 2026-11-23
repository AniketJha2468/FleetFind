const path = require('path');
const dotenv = require('dotenv');

// Explicitly resolve the root .env file from the project root (../../.env relative to Backend/config/)
const rootEnvPath = path.resolve(__dirname, '../../.env');
const result = dotenv.config({ path: rootEnvPath });

if (result.error && process.env.NODE_ENV !== 'production') {
  console.warn(`[Config] Notice: Could not load .env file from ${rootEnvPath}`);
} else {
  console.log(`[Config] Successfully loaded root environment from: ${rootEnvPath}`);
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 5000,
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/fleetfind',
  jwtSecret: process.env.JWT_SECRET || 'dev_jwt_secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  cookieSecret: process.env.COOKIE_SECRET || 'dev_cookie_secret',
};
