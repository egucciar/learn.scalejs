var require = {
    "baseUrl":  ".",
    "config":  {
        "scalejs.statechart-scion":  {
            "logStatesEnteredAndExited":  true
        }
    },
    "paths":  {
        "ace":  "Scripts/ace/ace",
        "bindings":  "Scripts/scalejs.mvvm.bindings",
        "bPopup":  "Scripts/jquery.bpopup.min",
        "CSS.supports":  "Scripts/CSS.supports",
        "cssparser":  "Scripts/cssparser",
        "domReady":  "Scripts/domReady",
        "fileTree":  "Scripts/jqueryFileTree",
        "formdata":  "Scripts/formdata",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "jQuery":  "Scripts/jquery-1.9.1.min",
        "jQuery-Migrate":  "Scripts/jquery-migrate-1.1.1.min",
        "jquery-ui":  "Scripts/jquery-ui-1.10.3",
        "knockout":  "Scripts/knockout-3.0.0.debug",
        "knockout-sortable":  "Scripts/knockout-sortable",
        "knockout.mapping":  "Scripts/knockout.mapping-latest.debug",
        "less":  "Scripts/less",
        "less-builder":  "Scripts/less-builder",
        "lessc":  "Scripts/lessc",
        "linqjs":  "Scripts/linq.min",
        "normalize":  "Scripts/normalize",
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.coincidence":  "Scripts/rx.coincidence",
        "rx.experimental":  "Scripts/rx.experimental",
        "rx.joinpatterns":  "Scripts/rx.joinpatterns",
        "rx.time":  "Scripts/rx.time",
        "sandbox":  "Scripts/scalejs.sandbox",
        "scalejs":  "Scripts/scalejs-0.3.3",
        "scalejs.ajax-jquery":  "Scripts/scalejs.ajax-jquery-0.3.0.0",
        "scalejs.editor-ace":  "extensions/scalejs.editor-ace",
        "scalejs.filetree-jquery":  "extensions/scalejs.filetree-jquery",
        "scalejs.functional":  "Scripts/scalejs.functional-0.2.9.8",
        "scalejs.layout-cssgrid":  "Scripts/scalejs.layout-cssgrid-0.2.7.130",
        "scalejs.linq-linqjs":  "Scripts/scalejs.linq-linqjs-3.0.3.1",
        "scalejs.mvvm":  "Scripts/scalejs.mvvm-0.3.4.4",
        "scalejs.reactive":  "Scripts/scalejs.reactive-2.1.20.1",
        "scalejs.statechart-scion":  "Scripts/scalejs.statechart-scion-0.3.0.0",
        "scalejs.tabs-jqueryui":  "Scripts/scalejs.tabs-jqueryui-1.1.1",
        "scion":  "Scripts/scion",
        "styles":  "Scripts/scalejs.styles",
        "text":  "Scripts/text",
        "views":  "Scripts/scalejs.mvvm.views"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.ajax-jquery",
            "scalejs.editor-ace",
            "scalejs.filetree-jquery",
            "scalejs.functional",
            "scalejs.layout-cssgrid",
            "scalejs.linq-linqjs",
            "scalejs.mvvm",
            "scalejs.reactive",
            "scalejs.statechart-scion",
            "scalejs.tabs-jqueryui"
        ]
    },
    "shim":  {
        "ace":  {
            "exports":  "ace"
        },
        "bPopup":  {
            "deps":  [
                "jQuery"
            ]
        },
        "CSS.supports":  {
            "exports":  "CSS"
        },
        "fileTree":  {
            "deps":  [
                "jQuery"
            ]
        },
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        },
        "jQuery":  {
            "exports":  "jQuery"
        },
        "jQuery-Migrate":  {
            "deps":  [
                "jQuery"
            ]
        },
        "jquery-ui":  {
            "deps":  [
                "jQuery"
            ]
        },
        "scalejs.statechart-scion":  {
            "deps":  [
                "scalejs.linq-linqjs",
                "scalejs.functional"
            ]
        }
    }
};
