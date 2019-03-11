const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('../util/db');
const app = express();

module.exports = () => {
    app.use(cors());
    app.use(bodyParser.json());
    
    app.use('/api', require('../core/user/user.routes'));
    return app;
}