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
    for (var k in req.files) {
        if (req.files.hasOwnProperty(k)) {
            const file = req.files[k];
            file.mv(`./uploads/${k}.html`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        }
    }
    setTimeout(() => {
        res.status(200).send(`
            <div>
                <h1>File uploaded successfully.</h1>
                <button onclick='window.history.back()'>Click here to go back</button>
            </div>
        `);
        // res.status(200).send(JSON.stringify(req.files));
    }, 5000)
});

app.get('/hello', (req, res, next) => {
    res.send('Hello world!');
})

const PORT = '8080';
app.listen(PORT);
console.log("Listening on port " + PORT);
