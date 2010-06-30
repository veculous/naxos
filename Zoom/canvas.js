$(document).ready(function(){
	var canvas = $('#canvas').get(0);
	var ctx = canvas.getContext('2d');

	ctx.strokeStyle = '#300';

	ctx.beginPath();
	ctx.moveTo(300, 0);
	ctx.lineTo(300, 450);
	ctx.moveTo(0, 225);
	ctx.lineTo(600, 225);
	ctx.stroke();
});