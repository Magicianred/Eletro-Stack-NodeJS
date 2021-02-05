const express = require("express");
const consign = require("consign");
const cors = require("cors");
const app = express();

app.use(cors())

app.set('view engine', 'ejs')   
app.set('views', './views');

consign()
.include('./routes')
.then('./models')
.then('./config/database.js')
.into(app);

module.exports = app;