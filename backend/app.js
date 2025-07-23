const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', router);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
