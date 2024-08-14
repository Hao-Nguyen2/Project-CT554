const express = require('express');
const api = require('./routes/api');
// const db = require('./configs/connect');
// connect database
// db.conn;

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
api(app);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
