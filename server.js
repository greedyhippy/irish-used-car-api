const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all origins
server.use(cors());

// Add custom routes/middleware here if needed
server.use(middlewares);

// Use /api prefix for all routes
server.use('/api/v1', router);

// Add a root route
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
      nct: '/api/v1/nct',
      finance: '/api/v1/finance',
      'total-cost-ownership': '/api/v1/total-cost-ownership',
      tyres: '/api/v1/tyres',
      'fuel-consumption': '/api/v1/fuel-consumption'
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;