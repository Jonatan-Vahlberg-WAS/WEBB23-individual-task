const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: "*"
    }));
}
else {
    app.use(cors({
        origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
    }));
}


module.exports = app;