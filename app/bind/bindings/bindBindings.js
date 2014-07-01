/*global define */
/*jslint sloppy: true*/
define({
    'bind-text': function () {
        return {
            text: "hello " + this.username()
        };
    },
    'bind-summary': function() {
        return {
            template: {
                name: 'bind_summary_template'
            }
        };

    },
    'bind-content': function () {
        return {
            template: {
                name: 'bind_content_template',
                data: this
            }
        };

    }

});
