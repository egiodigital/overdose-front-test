define([
    'jquery',
    'jquery/ui',
    'domReady!',
], function ($) {
    'use strict';

    /**
     * This widget is used to tag a DOM element as deletable. By default, it will use the click event on the item with a
     * data role of delete to trigger the deletion.
     */
    $.widget('egd.equal', {
        /**
         * This method constructs a new widget.
         */
        _create: function () {

            var $maxHeight = 0,
                $bloc = $(".product-item");

            // set bloc container equal
            $bloc.each(function(){
                if($(this).height() > $maxHeight) {
                    $maxHeight = $(this).height();
                }
            });
            $bloc.height($maxHeight);
        },
    });

    return $.egd.equal;
});
