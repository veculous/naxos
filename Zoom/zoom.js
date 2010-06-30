$(document).ready(function(){
	window.JH = {
		zoomLevel: 1,
		zoomIncrement: .2,
		viewport: {
			width: $('#viewport').width(),
			height: $('#viewport').height(),
			left: $('#viewport').get(0).offsetLeft,
			top: $('#viewport').get(0).offsetTop
			
		},
		image: {
			width: function(){
				return $('img').width();
			},
			height: function(){
				return $('img').height();
			},
			left: function(){
				return $('img').get(0).offsetLeft;
			},
			top: function(){
				return $('img').get(0).offsetTop;
			}
		}
	};

	JH.zoom = function(x, y, zoomOut){
		// where did the user click on the viewport?
		var viewportX = x - JH.viewport.left;
		var viewportY = y - JH.viewport.top;

		// find offsets for recentering image on viewport
		var deltaX = (JH.viewport.width / 2) - viewportX;
		var deltaY = (JH.viewport.height / 2) - viewportY;

		// translate viewport coordinates for click to image coordinates
		var imageX = viewportX - JH.image.left();
		var imageY = viewportY - JH.image.top();

		// how many pixels should the image be scaled for the zoom?
		var scaleIncrementX = JH.zoomIncrement * (zoomOut ? -1 : 1) * JH.image.width();
		var scaleIncrementY = JH.zoomIncrement * (zoomOut ? -1 : 1) * JH.image.height();

		// how far did the target image pixel move over?
		var offsetX = scaleIncrementX * (imageX / JH.image.width());
		var offsetY = scaleIncrementY * (imageY / JH.image.height());

		// reposition image
		$('img').animate({
			left: '+=' + (deltaX - offsetX) + 'px',
			top: '+=' + (deltaY - offsetY) + 'px',
			width: '+=' + scaleIncrementX + 'px',
			height: '+=' + scaleIncrementY + 'px'
		});
	};

	$('#canvas').bind('dblclick', function(e){
		var x = e.pageX;
		var y = e.pageY;
		var zoomOut = e.shiftKey;
		JH.zoom(x, y, zoomOut);
		//console.log(zoomOut? 'ZOOM OUT!' : 'ZOOM IN!');
	});
});