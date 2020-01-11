setTimeout(function(){ // make async! 
	
	// This file is for loading non-critical services. List them here:

	service('/annotate.js');

	function service(src, tag){ try{ // try loading service dependency
		(tag = tag || document.createElement('script')).src = src;
		document.body.appendChild(tag);
	} catch(e) { } }

}, 1);