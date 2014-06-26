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
            formatPrice = sandbox.formatter.formatPrice,
            items = observableArray(),
            username = observable(""),
            price = observable(25.99),
            formattedPrice = formatPrice(price);

        function submit() {
            items.push(username());
        }

        return {
            username: username,
            items: items,
            formattedPrice: formattedPrice,
            submit: submit
        };
    };
});
