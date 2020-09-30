console.log("script loaded");

window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),

		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		aroX = width /2,
		aroY = height /2,
		dx, dy, 
		angle = 0;

	var points = [],
		weight = .8,
		gravity = 1.5;
		friction = 1;
		console.log("Weight: ", weight);
		console.log("Gravity: ", gravity);
		console.log("Friction: ", friction);

		
	points.push({
		x: 100,
		y: 100,
		oldx: 95,
		oldy: 95
	});



	update();

	function update() {
		updatePoints();
		renderPoints();
		renderArrow();
		requestAnimationFrame(update);
	}

	function updatePoints() {
		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				vx = (p.x - p.oldx) * friction,
				vy = (p.y - p.oldy) * friction;

			p.oldx = p.x;
			p.oldy = p.y;
			p.x += vx;
			p.y += vy;
			p.y += gravity;

			if(p.x > width) {
				p.x = width;
				p.oldx = p.x + vx * weight;
			}
			else if(p.x < 0) {
				p.x = 0;
				p.oldx = p.x + vx * weight;
			}
			if(p.y > height) {
				p.y = height;
				p.oldy = p.y + vy * weight;
			}
			else if(p.y < 0) {
				p.y = 0;
				p.oldy = p.y + vy * weight;
			}
		}
	}

	function renderPoints() {
		context.clearRect(2, 2, width, height);
		for(var i = 0; i < points.length; i++) {
			var p = points[i];
			context.beginPath();
			context.arc(p.x, p.y, 35, 0, Math.PI * 2);
			context.fill();
		}
	}

	function renderPoints() {
		context.clearRect(0, 0,width, height);
		context.save();
		context.translate(aroX, aroY);
		context.rotate(angle);
		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(-20, 0);
		context.moveTo(20, 0);
		context.lineTo(10, -10);
		context.moveTo(20, 0);
		context.lineTo(10, 10);
		context.stroke();

		context.restore();
		contextAnimationFrame(render);
	}
};
