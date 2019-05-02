'use strict';
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
			window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}	

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
	}	
}());

let btn = document.querySelector('.btn'),
		btnStop = document.querySelector('.btnStop'),
		canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d"),
		x = 30,
		y = 30,
		dx = 1,
		dy = -1,
		ballRadius = 30,
		requestID = 2000;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "rgb(177, 117, 195)";
	ctx.strokeStyle = "yellow";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function draw() {
	requestID = requestAnimationFrame(draw);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}
}

btn.addEventListener('click', function(e) {
	e.preventDefault();
	requestID = requestAnimationFrame(draw);
});
btnStop.addEventListener('click', function(e) {
	e.preventDefault();
	cancelAnimationFrame(requestID);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});