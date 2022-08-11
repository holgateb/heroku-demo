const express = require('express');
const app = express();
const PORT = precess.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log('server up');   
});