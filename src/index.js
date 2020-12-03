const { urlencoded } = require('express');
const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(urlencoded({extended: false}));

//Router
app.use(require('./routes/index'));
app.listen(3000);
console.log('server on port 3000');