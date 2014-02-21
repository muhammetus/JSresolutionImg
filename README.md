JSresolutionImg
===============

According to the resolution show photos, jQuery Plugin

#Examples

```javascript

//for all images
$(document).ready(function(){
			
			$(document).resolutionImg({
									"980" : '980-src',
									"1024" : '1024-src',
									"1980" : '1980-src'
									 });
			
});

//for selectors

$(document).ready(function(){
			
			$('div#resize').resolutionImg({
									"980" : '980-src',
									"1024" : '1024-src',
									"1980" : '1980-src'
									 });
			
});

#Html Code

```html
<div id="resize">
<img src="images/600xistanbul.png" 980-src="images/600xistanbul.png" 1024-src="images/900xistanbul.png" 1980-src="images/1100xistanbul.png">
	</div>
<div id="not_resize">
<img src="images/600xistanbul.png" 980-src="images/600xistanbul.png" 1024-src="images/900xistanbul.png" 1980-src="images/1100xistanbul.png">
</div>
