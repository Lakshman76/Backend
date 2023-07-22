require('dotenv').config();

const express = require('express');

const dbConnect = require('./config/databaseConfig');

const router = require('./router/userRouter');

const app = express();

dbConnect();

app.use(express.json());

app.use('/',router);

module.exports = app;