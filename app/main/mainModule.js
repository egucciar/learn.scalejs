/*global define */
define([
    'sandbox!main',
    'app/main/viewmodels/mainViewModel',
    'views!main',
    'bindings!main',
    'styles!main'
], function (
    sandbox,
    mainViewModel
) {
    'use strict';

    return function main() {
        var // imports
            root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            registerTransition = sandbox.state.registerTransition,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            on = sandbox.state.builder.on,
            gotoInternally = sandbox.state.builder.gotoInternally,
            parseGridStyles = sandbox.layout.parseGridStyles,
            template = sandbox.mvvm.template,
            gridTemplate = sandbox.layout.utils.gridTemplate,
            parallel = sandbox.state.builder.parallel,
            // vars
            viewModel = mainViewModel();

        // Register application state for the module.
        registerStates('root',
            parallel('app',
               onEntry(function () {
                   parseGridStyles(function () {
                       root(gridTemplate('main_layout_template', viewModel));
                   });
                   this.code = viewModel.code;
                   this.module = viewModel.module;
               }),
               state('main',
                state('main.module', 
                    onEntry(function() {
                        this.module(template('main_template', viewModel));
                    })))));

        // Register self-opening transition
        registerTransition('main', on('open.module',
           function (e) {
               return e.data.module === 'main'
           }, gotoInternally('main.module')));
    };
});
