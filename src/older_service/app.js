const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));

module.exports = app;
// i create 'jaydev787748@gmail.com folder in this form and store these files.




