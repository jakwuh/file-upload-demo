var express = require('express')
var multer  = require('multer')
var path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({storage: storage})

var app = express()

app.use(express.static(path.join(__dirname)))

app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log(req);
    res.end('Ok');
})

app.listen(9876, function() {
    console.log('Server is listening on 9876')
})