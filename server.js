const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/musicLibApp'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/musicLibApp/index.html'));
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port...');
});