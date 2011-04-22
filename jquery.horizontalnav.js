/* Author: Jose Luis Rivas <joseluis@eserre.com>
 * 
 * @name: Horizontal Navigation
 * @desc: Dynamic navigation that shows and hides on clicks over h3
 * attribute, fading in and out like on www.movistar.com.ve
 *
 * @args: none
 * @reqs: jQuery
*/

(function($){

	$.fn.horizontalnav = function(){

		$(element).load(function() {
			$(element).find(".container h3:first").parent().addClass("active");
			$(element).find(".container .content:not(:first)").hide();

			$(element).find(".container h3").click( function() {
				$(element).find(".container.active .content").hide();
				$(element).find(".container.active").toggleClass("active");
				$(this).parent().toggleClass("active");
				$(this).next(".content").fadeIn('slow').show();
			});
		});

		return this;
	};

})(jQuery);
