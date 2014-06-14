﻿/*global define */
define([
    'sandbox!code',
    'app/code/viewmodels/codeViewModel',
    'bindings!code',
    'views!code',
    'styles!code'
], function (
    sandbox,
    codeViewModel
) {
    'use strict';

    return function codeModule() {
        var // imports
            gridTemplate = sandbox.layout.utils.gridTemplate,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            registerTransition = sandbox.state.registerTransition,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            on = sandbox.state.builder.on,
            gotoInternally = sandbox.state.builder.gotoInternally,
            goto = sandbox.state.builder.goto,
            has = sandbox.object.has,
            // vars
            code = codeViewModel(sandbox);

        // Register application state for the module.
        registerStates('app',
            state('code',
                onEntry(function () {
                    // Render viewModel using 'main_template' template 
                    // (defined in main.html) and show it in the `root` region.
                    this.code(gridTemplate('code_template', code));
                }),
                on('open.module', gotoInternally('load.module')),
                state('load.module',
                    onEntry(function (e) {
                        var module = has(e) ? e.data.module : 'main';
                        code.load(module);
                    }))));

        registerStates('main',
            state('code.module',
                onEntry(function () {
                    this.module(template('code_module_template', code))
                })));

        registerTransition('main', on('open.module',
           function (e) {
               return e.data.module === 'code'
           }, gotoInternally('code.module')));
    };
});