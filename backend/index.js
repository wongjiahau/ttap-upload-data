const express = require('express')
const fileUpload = require('express-fileupload');
const path = require('path');

var app = express()
app.use(fileUpload());
app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.post('/upload', function (req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }
    return res.status(200).send(JSON.stringify(req.files));

    // The name of the input field (i.e. "sampleFile") is used to retrieve the
    // uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('/home/hou32hou', function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded!');
    });
});

app.get('/hello', (req, res, next) => {
    res.send('Hello world!');
})

const PORT = '8080';
app.listen(PORT);
console.log("Listening on port " + PORT);
