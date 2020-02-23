const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ispApp'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/ispApp/index.html'));
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port...');
});