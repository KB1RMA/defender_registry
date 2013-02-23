jQuery(document).ready(function() {

	// Infinite Scroll
	jQuery.ias({
		container : '.vehicleList',
		item: '.vehicle',
		pagination: '#content .paginator',
		next: '.next a',
		loader: '<img src="images/loader.gif"/>'
	});

} );
