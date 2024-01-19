const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/database');

const app = express();

const clientPort = process.env.CLIENT_PORT || 3000

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: "*"
    }));
}
else {
    app.use(cors({
        origin: [`http://localhost:${clientPort}`, `http://127.0.0.1:${clientPort}`]
    }));
}

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

connectToDB();

module.exports = app;