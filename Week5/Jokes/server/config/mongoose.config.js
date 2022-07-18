const mongoose = require('mongoose');

const mongoEndPoint = 'mongodb://localhost/';
const dbName = 'jokes';

mongoose
    .connect(mongoEndPoint + dbName)
    .then(() => console.log(`Connect to the ${dbName} db`))
    .catch(err => console.log('Failed connecting to the database ', err));
