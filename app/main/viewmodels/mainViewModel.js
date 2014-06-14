/*global define */
define([
    'sandbox!main'
], function (
    sandbox
) {
    'use strict';

    return function () {
        var // imports
            observable = sandbox.mvvm.observable,
            raise = sandbox.state.raise,
            has = sandbox.object.has,
            // properties
            code = observable(),
            module = observable();

        function raiseModule(dir, name) {
            if (has(dir.match("^./app/[^./]*/$"))) {
                raise("open.module", { module: name });
            }
        }

        return {
            code: code,
            module: module,
            raiseModule: raiseModule
        };
    };
});
