define([
  "jquery",
  "jquery/ui",
], function ($) {
    'use strict';

    /**
     * This widget is used to tag a DOM element as deletable. By default, it will use the click event on the item with a
     * data role of delete to trigger the deletion.
     */
    $.widget('egd.egdSticky', {
        options: {
            ScrollHeight: 0
        },

        /**
         * This method constructs a new widget.
         */
        _create: function () {
          var options = this.options;

          $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > options.ScrollHeight) {
              $(".prodcut-sticky").fadeIn("fast");
            } else {
              $(".prodcut-sticky").fadeOut("fast");
            }
          });

          $('#qtyGrouped').change(function(){
            $('form .data.grouped tr:first-child .qty').val(this.value);
          });

          $( "input[type='number']" ).change(function() {
            $('#qtyGrouped').val(this.value);
          });

          $('#btnSticky').click(function() {
            var $this = $(this)
            $this.attr("disabled", "disabled");
            setTimeout(function() {
              $this.removeAttr("disabled");
            }, 1500);
              $('#product-addtocart-button').click();
          });

          var clicks = 0;
          $('.btnCustom').click(function() {
            if (clicks == 0){
                $('#bundle-slide').click();
                $(this).text("Add To Cart");
                } else{
                $('#product-addtocart-button').click();
              }
            ++clicks;
          });

      }
    });

  return $.egd.egdSticky;
});