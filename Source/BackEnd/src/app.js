//create server
const express = require('express');
const authRouter = require("./routes/auth.route")

const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth-api', authRouter)

module.exports = app;