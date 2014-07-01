/*global define,setTimeout,console*/
define([
    'scalejs!core',
    'knockout',
    'jQuery',
    'fileTree'
], function (
    core,
    ko,
    $
) {
    'use strict';

    var merge = core.object.merge;

    function init(
        element,
        valueAccessor
    ) {
        var value = valueAccessor(),
            defaultOptions = {
                root: './',
                script: '/fileTree',
                openPath: ['app', 'main'],
                expandSpeed: 50,
                collapseSpeed: 100,
                multiFolder: false,
                clickHandler: function (fileOrDir, name) {
                    console.log(name, fileOrDir);
                }
            },
            options = merge(defaultOptions, value);

        function open(m) {
            return function () {
                setTimeout(function () {
                    $('.ft-' + m).click();
                });
            };
        }
        options.callback = options.openPath.map(open);

        $(element).fileTree(options, options.clickHandler);
    }

    ko.bindingHandlers.fileTree = {
        init: init
    };
});

