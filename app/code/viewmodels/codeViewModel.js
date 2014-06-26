/*global define */
define([
    'sandbox!code'
], function (
    sandbox
) {
    'use strict';

    return function () {
        var observableArray = sandbox.mvvm.observableArray,
            observable = sandbox.mvvm.observable,
            ajaxGet = sandbox.ajax.get,
            copy = sandbox.array.copy,
            tabs = observableArray([]),
            defaultTabs = observableArray([]),
            active = observable(),
            allFiles = [],
            selectedTheme = observable('monokai'),
            themes = ['ambiance', 'chaos', 'chrome', 'clouds', 'clouds_midnight',
                'colbalt', 'crimson_editor', 'dawn', 'dreaweaver', 'eclipse',
                'github', 'idle_fingers', 'katzenmilch', 'kz', 'kuroir', 'merbivore',
                'merbivore_soft', 'mono_industrial', 'monokai', 'pastel_on_dark',
                'solarized_dark', 'solarized_ligt', 'terminal', 'textmate', 'tomorrow',
                'tomorrow_night', 'tomorrow_night_blue', 'tomorrow_night_bright',
                'tomorrow_night_eighties', 'twilight', 'vibrant_ink', 'xcode'];


        function createTab(file) {
            return {
                header: file.header,
                content: {
                    text: observable(file.content),
                    editorMode: file.header.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1],
                    selectedTheme: selectedTheme
                }
            };
        }

        function load(module) {
            ajaxGet(module).subscribe(function (files) {
                allFiles = files.map(createTab);
                tabs(copy(allFiles));
                var sorted = ['Module', 'ViewModel', 'Bindings', 'html', 'less']
                    .map(function (filetype) {
                        return tabs.remove(function (tab) {
                            return tab.header.indexOf(filetype) > 0;
                        })[0];
                    });
                tabs(sorted);
                active(0);
            });
        }

        tabs.subscribe(function () {
            defaultTabs(allFiles.except(tabs()).toArray());
        });

        return {
            load: load,
            tabs: tabs,
            active: active,
            defaultTabs: defaultTabs,
            themes: themes,
            selectedTheme: selectedTheme
        };
    };
});
