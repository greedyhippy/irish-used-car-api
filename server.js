const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: './public'
});

// Enable CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(middlewares);

// Add custom routes
server.get('/', (req, res) => {
  res.json({
    message: 'Irish Used Car API',
    version: '1.0.0',
    endpoints: {
      vehicles: '/api/v1/vehicles',
      images: '/api/v1/images',
      specifications: '/api/v1/specifications',
      'technical-data': '/api/v1/technical-data',
      valuations: '/api/v1/valuations',
      history: '/api/v1/history',
      mot: '/api/v1/mot',
      finance: '/api/v1/finance',
      'total-cost-ownership': '/api/v1/total-cost-ownership',
      tyres: '/api/v1/tyres',
      'fuel-consumption': '/api/v1/fuel-consumption'
    }
  });
});

// Use /api/v1 prefix
server.use('/api/v1', router);

// For Vercel
const port = process.env.PORT || 3000;
server.listen(port);

module.exports = server;