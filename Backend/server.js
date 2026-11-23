const app = require('./app');
const config = require('./config/env');

const server = app.listen(config.port, () => {
  console.log('==================================================');
  console.log(`🚀 FleetFind Backend API Server running!`);
  console.log(`📡 Environment: ${config.env}`);
  console.log(`🌐 Server Port: ${config.port}`);
  console.log(`🔗 Health Check: http://localhost:${config.port}${config.apiPrefix}/health`);
  console.log(`🎯 Client URL: ${config.clientUrl}`);
  console.log('==================================================');
});

// Handle graceful shutdown
const handleExit = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down FleetFind API server gracefully...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleExit('SIGTERM'));
process.on('SIGINT', () => handleExit('SIGINT'));
