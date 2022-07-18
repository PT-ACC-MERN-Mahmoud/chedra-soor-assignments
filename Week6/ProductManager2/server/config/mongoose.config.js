const mongoose = require('mongoose');

const mongoEP = 'mongodb://localhost/';
const dbName = 'product';

mongoose
    .connect(mongoEP + dbName)
    .then(() => console.log(`Connecting to ${dbName} db`))
    .catch(err => console.log('Failed connecting to the database ', err));