/**
 * Health check controller
 */
const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'FleetFind Backend API is running healthy',
    data: {
      status: 'UP',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
    },
  });
};

module.exports = {
  getHealthStatus,
};
