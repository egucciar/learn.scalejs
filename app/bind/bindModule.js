/*global define */
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
            root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            registerTransition = sandbox.state.registerTransition,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            on = sandbox.state.builder.on,
            gotoInternally = sandbox.state.builder.gotoInternally,
            // vars
            bind = bindViewModel(sandbox);

        // Register application state for the module.
        registerStates('main',
            state('bind',
                onEntry(function () {
                    // Render viewModel using 'main_template' template 
                    // (defined in main.html) and show it in the `root` region.
                    bind.text('Hello World from bind!');
                    this.module(template("bind_template", bind));
                })));

        registerTransition('main', on('open.module',
            function(e) {
                return e.data.module === 'bind' 
            }, gotoInternally('bind')));
    };
});
