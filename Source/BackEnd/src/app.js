//create server
const express = require('express');
const authRouter = require("./routes/auth.route");
const foodRouter = require('./routes/food.route');

const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth-api', authRouter);
app.use('/api/food',foodRouter)

module.exports = app;