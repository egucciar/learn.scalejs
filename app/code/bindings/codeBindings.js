/*global define */
/*jslint sloppy: true*/
define({
    'code-editor': function () {
        return {
            editor: {
                text: this.text,
                selectedTheme: this.selectedTheme,
                editorMode: this.editorMode
            }
        };
    },
    'code-tabs': function () {
        return {
            tabs: {
                itemsSource: this.tabs,
                defaultItems: this.defaultTabs,
                active: this.active,
                contentTemplate: 'code_tabs_content_template'
            }
        };
    }
});
