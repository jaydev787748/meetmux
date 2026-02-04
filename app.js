const express = require('express');;
const bodyParser = require('body-parser');
const userRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));

module.exports = app; // for testing

