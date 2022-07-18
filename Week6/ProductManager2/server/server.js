require('./config/mongoose.config')
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );