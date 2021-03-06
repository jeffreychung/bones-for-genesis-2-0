// Avoid `console` errors in browsers that lack a console.
// http://html5boilerplate.com/
(function() {

	"use strict";

	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while( length-- ) {
		method = methods[length];

		// Only stub undefined methods.
		if( !console[method] ) {
			console[method] = noop;
		}
	}
}());

(function($) {

	"use strict";

	// Remove the 'no-js' <body> class
	$('html').removeClass('no-js');

	// Enable FitVids on the content area
	fitvids('.content');

})( window.jQuery );
