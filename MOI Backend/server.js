const express = require('express');
const app = express();
const port = 3000;
const Cors = require('cors');
app.use(Cors())

//db connection
require("./Database/connectionDB");

// middleweare
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// All Routes
const Routes = require('./Routes/allroutes');
app.use('/api', Routes)


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));