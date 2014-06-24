var bodyParser = require('body-parser'),
    express = require('express'),
    fs = require('fs'),
    async = require('async'),
    fileTree = require('./jqueryFileTree.js'),
    app = express();

app.use(bodyParser());
app.use(express.static(__dirname));

app.post('/fileTree', fileTree.getDirList);

var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

app.get('/:module', function (req, res) {
    var module = req.params.module;

    walk('./app/' + module, function (err, results) {
        var files = [];

        if (!results) return;

        async.eachSeries(results,
            function (file, cb) {
                var filePath = file.split("/"),
                    fileName = filePath[filePath.length - 1];
                fs.readFile(file, { encoding: 'utf8' }, function (err, content) {
                    if (!err) {
                        files.push({
                            header: fileName, content: content.slice(1, content.length)
                        });
                    }
                    cb(err);
                });
            },
            function (err) {
                if (err) console.log(err);
                res.send(files);
            });
    });
});

var server = app.listen(process.env.VCAP_APP_PORT || 3000);
console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
