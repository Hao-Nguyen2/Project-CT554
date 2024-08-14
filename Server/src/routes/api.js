const express = require('express');
const cors = require('cors');

let router = express.Router();

const api = (app) => {
    router.get('/', () => {
        console.log('route');
        
    });

    app.use(cors({
        origin: 'http://localhost:3000'
    }));

    app.use('/api/v12/', router);
};

module.exports = api;
