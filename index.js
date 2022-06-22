'use strict';

const PORT = process.env.PORT || 3001

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {
    console.log('Connection is a go!')
    // Start the web server
    require('./src/server.js').start(PORT);
  });

