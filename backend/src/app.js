const express = require('express');
const matchesRouter = require('./routers/matchesRouter');

const app = express();

app.use(express.json());
app.use('/matches', matchesRouter);

module.exports = app;