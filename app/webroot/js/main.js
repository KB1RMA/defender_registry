(function (window, document) {
	'use strict'

	var
		$ = window.jQuery,
		$window = $(window),
		$doc = $(document);

	function init() {
		$doc.foundation();

		// Infinite Scroll
		$.ias({
			container : '.vehicleList',
			item: '.vehicle',
			pagination: '#content .paginator',
			next: '.next a',
			loader: '<img src="images/loader.gif"/>'
		});

	}

	$(function () {
		init();
	});

})(this, document);
