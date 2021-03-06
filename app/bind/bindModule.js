﻿/*global define */
define([
    'sandbox!bind',
    'app/bind/viewmodels/bindViewModel',
    'bindings!bind',
    'views!bind',
    'styles!bind'
], function (
    sandbox,
    bindViewModel
) {
    'use strict';

    return function bindModule() {
        var // imports
            gridTemplate = sandbox.layout.utils.gridTemplate,
            registerStates = sandbox.state.registerStates,
            registerTransition = sandbox.state.registerTransition,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            on = sandbox.state.builder.on,
            gotoInternally = sandbox.state.builder.gotoInternally,
            // vars
            bind = bindViewModel(sandbox);

        // Register main state for the module.
        registerStates('main',
            state('bind',
                onEntry(function () {
                    this.module(gridTemplate("bind_template", bind));
                })));

        // Register self-opening transition
        registerTransition('main', on('open.module',
            function (e) {
                return e.data.module === 'bind';
            }, gotoInternally('bind')));
    };
});
