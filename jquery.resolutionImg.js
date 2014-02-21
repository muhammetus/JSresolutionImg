/* 
Plugin name: resolutionImg
Author: Muhammet US
muhammetuss@gmail.com

*/
(function ( $ ) {
    $.fn.resolutionImg = function(options) {
         
		var wWidth  = $(window).width(),
			showImage = null,
			showTag   = null,
			selector = this.selector;
			
			$.each(options,function(key,value){
				//last resolution
				 if(key <=  wWidth){
					showImage = key;
					showTag   = value;		
				}
			});
			$(selector + ' img['+showTag+']').each(function(){
				this.src = $(this).attr(showTag);
			});
			
			//setTimeOut
    };
}( jQuery ));
