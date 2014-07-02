/*global define,alert */
define([
    'sandbox!bind'
], function (
    sandbox

) {
    'use strict';

    return function () {
        var //imports
            observable = sandbox.mvvm.observable,
            observableArray = sandbox.mvvm.observableArray,
            computed = sandbox.mvvm.computed,
            //members
            helloWorld = observable("Hello World!"),
            itemsList = observableArray(),
            newItem = observable(),
            formattedPrice,
            listA,
            listB;

        // define functions at the top

        function submitItem() {
            itemsList.push(newItem());
        }

        function selectableItemsViewModel(initialItems) {
            return {
                items: observableArray(initialItems),
                selectedItems: observableArray()
            };
        }

        function move(source, target) {
            return function () {
                var selectedItems = source.selectedItems();
                source.items.removeAll(selectedItems);
                target.items(target.items().concat(selectedItems));
            };
        }

        function createFormattedPrice(initialValue) {
            var price = observable(initialValue);

            return computed({
                read: function () {
                    return '$' + price().toFixed(2)
                },
                write: function (value) {
                    value = parseFloat(value.replace(/[^\.\d]/g, ""));
                    price(isNaN(value) ? 0 : value);
                }
            });
        }

        listA = selectableItemsViewModel();
        listB = selectableItemsViewModel(['London', 'Paris', 'France']);

        // updates listA.items with the items in itemsList
        itemsList.subscribe(listA.items);

        formattedPrice = createFormattedPrice(20.00);

        return {
            helloWorld: helloWorld,
            itemsList: itemsList,
            newItem: newItem,
            submitItem: submitItem,
            listA: listA,
            listB: listB,
            move: move,
            formattedPrice: formattedPrice
        };
    };
});
