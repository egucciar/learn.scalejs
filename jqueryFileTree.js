/**
*	jQuery File Tree Node.js Connector
*	Version 1.0
*	wangpeng_hit@live.cn
*	21 May 2014
*/
var fs = require('fs'),
    exclude = ['README.txt', 'packages.config', 'learn.scalejs.csproj.user', 'learn.scalejs.csproj', 'index.test.html', 'Scripts', 'Properties', 'extensions', 'docs', 'css', 'test', 'config.js', 'index.html', 'js', 'node_modules', 'obj', 'packages', 'jqueryFileTree.js', 'learn.scalejs.sln', 'learn.scalejs.v12.suo', 'LICENSE', 'README.md', 'server.js','.git','.nuget','.scalejs','package.json'];


var _getDirList = function (request, response) {
    var dir = request.body.dir;
    var r = '<ul class="jqueryFileTree" style="display: none;">',
        dstring = "",
        fstring = "";

    try {
        r = '<ul class="jqueryFileTree" style="display: none;">';
        var files = fs.readdirSync(dir);
        files.forEach(function (f) {
            var ff = dir + f;

            if (exclude.indexOf(f) >= 0) {
                return;
            }
            var stats = fs.statSync(ff)
            if (stats.isDirectory()) {
                dstring += '<li class="directory collapsed"><a class="ft-' + f + '" href="#" rel="' + ff + '/">' + f + '</a></li>';
            } else {
                var e = f.split('.')[1];
                fstring += '<li class="file ext_' + e + '"><a href="#" rel=' + ff + '>' + f + '</a></li>';
            }
        });
        r += dstring + fstring + '</ul>';
    } catch (e) {
        r += 'Could not load directory: ' + dir;
        r += '</ul>';
    }
    response.send(r)
}

module.exports.getDirList = _getDirList;