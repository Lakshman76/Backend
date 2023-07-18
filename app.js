require('dotenv').config();

const express = require('express');

const dbConnect = require('./config/databaseConfig');

const app = express();

dbConnect();

module.exports = app;