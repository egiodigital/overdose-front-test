define([
    'jquery',
    'jquery/ui',
    'tst/sticky',
    'domReady!',
], function ($) {
    'use strict';

    /**
     * This widget is used to tag a DOM element as deletable. By default, it will use the click event on the item with a
     * data role of delete to trigger the deletion.
     */
    $.widget('egd.sticky', {
        /**
         * This method constructs a new widget.
         */
        _create: function () {

            var sticky = new Sticky('.nav-container');

        },
    });

    return $.egd.sticky;
});
