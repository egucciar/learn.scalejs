/*global define */
/*jslint sloppy: true*/
define({
    'bind-item-input': function () {
        var data = this;

        return {
            value: this.newItem,
            valueUpdate: 'afterkeydown',
            event: {
                keyup: function (data, e) {
                    if (e.keyCode === 13) {
                        data.submitItem();
                    }
                }
            }
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
