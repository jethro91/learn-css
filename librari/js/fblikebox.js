$(document).ready(function(){   
    var fbWidth;

    function attachFluidLikeBox(){
		var fbhref = $("#likebox").attr('data-fb'); 
        // the FBML markup: WIDTH is a placeholder where we'll insert our calculated width
        var fbml = '<fb:like-box href="'+fbhref+'" width="WIDTH" height="240" show_faces="false" stream="true"></fb:like-box>';//$('#likeBoxTemplate').text().toString();

        // the containing element in which the Likebox resides
        var container = $('#likebox');  

        // we should only redraw if the width of the container has changed
        if(fbWidth != container.width()){
            container.empty(); // we remove any previously generated markup

            fbWidth = container.width(); // store the width for later comparison

            fbml = fbml.split('WIDTH').join(fbWidth.toString());    // insert correct width in pixels

            container.html(fbml);   // insert the FBML inside the container

            try{
                FB.XFBML.parse();   // parses all FBML in the DOM.
            }catch(err){
                // should Facebook's API crap out - wouldn't be the first time
            }
        }
    }

    var resizeTimeout;

    // Resize event handler
    function onResize(){
        if(resizeTimeout){
            clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(attachFluidLikeBox, 200);    // performance: we don't want to redraw/recalculate as the user is dragging the window
    }

    // Resize listener
    $(window).resize(onResize);

    // first time we trigger the event manually
    onResize();
	});