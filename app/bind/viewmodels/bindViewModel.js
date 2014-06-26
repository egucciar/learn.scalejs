/*global define,alert */
define([
    'sandbox!bind'
], function (
    sandbox
) {
    'use strict';

    return function () {
        var observable = sandbox.mvvm.observable,
            observableArray = sandbox.mvvm.observableArray,
            items = observableArray(),
            username = observable("");
    
        function submit() {
            items.push(username());
        }

        return {
            username: username,
            items: items,
            submit: submit
        };
    };
});
