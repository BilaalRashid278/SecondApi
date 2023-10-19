const express = require('express');
const app = express();
const router = require('./routers/routeConnect.js');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/v1',router);

module.exports = app