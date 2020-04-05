const { join } = require('path');
const express = require('express');

const app = express();
const publicPath = join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'))
});

app.listen(port, () => {
    console.log("server is up!");
});