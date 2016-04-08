
var fs = require('fs');
var path = require('path');
var fis = require('fis-kernel');


module.exports = {
    fis2commonjs: function (src, dist) {
        var cwd = process.cwd();

        fis.project.setProjectRoot(path.join(cwd, 'component_modules'));

        console.log(path.join(cwd, 'component_modules_output'));

        fis.release({pack: true},function () {
            console.log(arguments);
        });

    }
};
