'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure routes here
exports.default = app;