/*!
 * Utilities 0.0.1
 *
 * Compiled by Francis Tseng (@frnsys / frnsys.com)
 * Released under the MIT License
 */

;(function(factory) {
	if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(factory);
	} else {
			// Browser globals
			factory();
	}
}(function() {

	ø = {

		// http://goo.gl/i7k0n
		// compare(arr1, arr2);
		compare: function(arr1, arr2) {
			if(arr1.length!=arr2.length)  // First compare length - saves us a lot of time
				return false;
			for(var i=0; i<arr1.length; i++) {
				if(arr1[i] instanceof Array && arr2[i] instanceof Array){   // Compare arrays
						if(!arr1[i].compare(arr2[i]))
							return false;
				}
				else if(arr1[i]!=arr2[i]) { //Warning - two diff object instances will never be equal: {x:20}!={x:20}
						return false;
				}
			}
			return true;
		},

		// http://goo.gl/Ksmbv
		iterate: function(obj, fn) {
			if (!fn) {
				return false;
			}
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					if (typeof obj[prop] == "object") {
						iterate(obj[prop], fn);
					} else {
						fn(prop, obj);
					}
				}
			}
		}
	};

	return ø;

}));
