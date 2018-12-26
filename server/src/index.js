const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();

app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));

// configure routes here
export default app;
