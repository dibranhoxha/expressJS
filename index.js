const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./Members');


const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}

// Init middleware
app.use(logger);

// Get all Members
app.get('/api/members', (req, res) => res.json(members));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
