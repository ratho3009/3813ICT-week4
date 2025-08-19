
const express = require('express');
const app = express();                   
const http = require('http').Server(app);
const cors = require('cors');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' })); 


require('./routes/authroute.js').route(app);

// Start server
const PORT = 3000;
const server = http.listen(PORT, function () {
  const port = server.address().port;
  console.log('Server running at http://localhost:' + port);
});
