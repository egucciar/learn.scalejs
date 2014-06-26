/*global define*/
define([
	'scalejs!core',
    'knockout'
], function (
	core,
    ko
) {
    function formatPrice(priceObs) {
        var formatPriceObs = ko.computed({
            read: function () {
                return '$' + priceObs().toFixed(2);
            },
            write: function (value) {
                // Strip out unwanted characters, parse as float, then write the raw data back to the underlying "price" observable
                value = parseFloat(value.replace(/[^\.\d]/g, ""));
                priceObs(isNaN(value) ? 0 : value); // Write to underlying storage
            }
        });


        return formatPriceObs;
    }

    core.registerExtension({
        formatter: {
            formatPrice: formatPrice
        }
    });

});

