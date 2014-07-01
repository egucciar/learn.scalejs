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
            formattedPrice = formatPrice(price),
            availableItems = observableArray(['London', 'Paris', 'Tokyo']),
            availableItem = observableArray(),
            selectedItems = observableArray(),
            selectedItem = observableArray();

        function addAvailable() {
            var item = availableItem();
            availableItems.removeAll(item);
            selectedItems(selectedItems().concat(item));
        }
        function addSelected() {
            var item = selectedItem();
            selectedItems(availableItems().concat(item));
            selectedItems.removeAll(item);
        }
        function submit() {
            items.push(username());
        }

        function onEnterKeyPressed(data,event) {
            if (event.keyCode === 13 ) {
                submit();
            }
        }

        return {
            username: username,
            items: items,
            formattedPrice: formattedPrice,
            submit: submit,
            onEnterKeyPressed: onEnterKeyPressed,
            selectedItem: selectedItem,
            selectedItems: selectedItems,
            availableItems: availableItems,
            availableItem: availableItem,
            addAvailable: addAvailable,
            addSelected: addSelected
        };
    };
});
