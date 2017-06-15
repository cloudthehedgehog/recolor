(function ( $ ) {

    $.fn.recolored = function( options ) {

        var settings = $.extend({
            effect: "grayscale",
        }, options );

        $(this).addClass("recolored");

    };

}( jQuery ));


		