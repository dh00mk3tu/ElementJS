console.log("ElementJS Loaded - Callback");

window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		// entity = particle.create(100, 100, 3, Math.PI/3);

		particles = [];
		nParticles = 0;
		//velocity = 10;
		//direction = 1;

	document.getElementById("generate").addEventListener("click", generate);
	document.getElementById("reset").addEventListener("click", reset);

		function generate() {
			//console.log("inside generate function");
			var n = document.getElementById("nParticles").value;
			var pv = document.getElementById("velocity").value;
			var pd = document.getElementById("direction").value;

			
			nParticles =  n;
			console.log("nParticles", nParticles);
			for(var i=0; i < n; i += 1) {
				// particle.create(x, y, speed, direction)
					particles.push(particle.create(width/2, height/2,Math.random()*pv, Math.PI*pd*Math.random()));
			}
			update();
			// alert(input);
		}

		function reset() {
			context.clearRect(0, 0, width, height);
			n = 0;
			nParticles = 0;
			pv = 0;
			pd = 0;
			entity.position = vector.create(0, 0);
			console.log("particle on reset", nParticles);
			// requestAnimationFrame(reset);
		}

 

		
		//update();

		function update() {
			console.log("inside update function");
			context.clearRect(0, 0, width, height);

			for(var i=0; i<nParticles; i += 1){
				var entity = particles[i];
			
			entity.update();
			//Init object to draw
			// position.addTo(velocity);
			context.beginPath();
			//Drawing the circle
			context.arc(entity.position.getX(), entity.position.getY(), 15 ,0, Math.PI * 2, false);
			context.fill();
			
			}	
			requestAnimationFrame(update);
			//nParticles = 0;
		}
	};




		// arrowX = width /2,
		// arrowY = height /2,
		// dx, dy, 
		// angle = 0;


	// Vector Object
// 	var elementVector1 = vector.create(10, 5),
// 		elementVector2 = vector.create(3, 4),
// 		elementVector3 = vector.add(elementVector1, elementVector2);

// 		console.log(elementVector3.getX(), elementVector3.getY());

// 	// console.log(elementVector.getX());
// 	// console.log(elementVector.getX());
// 	// console.log(elementVector.getAngle());
// 	// console.log(elementVector.getLenth());

	

// 	var points = [],
// 		weight = .8;
// 		gravity = 1.6;
// 		friction = 1;
// 		forceIncrement = 0.1;
// 		console.log("Weight: ", weight);
// 		console.log("Gravity: ", gravity);
// 		console.log("Friction: ", friction);

		
// 	points.push({
// 		x: 100,
// 		y: 100,
// 		oldx: 95,
// 		oldy: 95
// 	});


// 	document.getElementById("ball").addEventListener("click", update);
// 	document.getElementById("renderArr").addEventListener("click", renderArrow);
// 	//update();
// 	//renderArrow();
// 	function update() {
		
// 		//console.log("Update Called")
// 		updatePoints();
// 		renderPoints();
// 		requestAnimationFrame(update);
// 	}

// 	function updatePoints() {
// 		for(var i = 0; i < points.length; i++) {
// 			var p = points[i],
// 				vx = ((p.x - p.oldx) * friction) + forceIncrement,
// 				vy = ((p.y - p.oldy) * friction) + forceIncrement;

// 			p.oldx = p.x;
// 			p.oldy = p.y;
// 			p.x += vx;
// 			p.y += vy;
// 			p.y += gravity;
// 			forceIncrement += .001;
// 			if(p.x > width) {
// 				p.x = width;
// 				p.oldx = p.x + vx * weight;
// 			}
// 			else if(p.x < 0) {
// 				p.x = 0;
// 				p.oldx = p.x + vx * weight;
// 			}
// 			if(p.y > height) {
// 				p.y = height;
// 				p.oldy = p.y + vy * weight;
// 			}
// 			else if(p.y < 0) {
// 				p.y = 0;
// 				p.oldy = p.y + vy * weight;
// 			}
// 		}

// 	}

// 	function renderPoints() {
// 		//console.log("Arrow Called")
// 		context.clearRect(2, 2, width, height);
// 		for(var i = 0; i < points.length; i++) {
// 			var p = points[i];
// 			context.beginPath();
// 			context.arc(p.x, p.y, 35, 0, Math.PI * 2);
// 			context.fill();
// 		}
// 	}

// 	function renderArrow() {
// 		//arrowX = width / 2 + Math.cos(a) * height * .4;
// 		//arrowY = height / 2 + Math.sin(a) * height * .4;
// 		//a += .01;
// 		context.clearRect(0, 0, width, height);

// 		context.save();
// 		context.translate(arrowX, arrowY);
// 		context.rotate(angle);

// 		context.beginPath();
// 		context.moveTo(20, 0);
// 		context.lineTo(-20, 0);
// 		context.moveTo(20, 0);
// 		context.lineTo(10, -10);
// 		context.moveTo(20, 0);
// 		context.lineTo(10, 10);
// 		context.stroke();

// 		context.restore();
// 		requestAnimationFrame(renderArrow);
// 	}

// 	document.body.addEventListener("mousemove", function(event) {
// 		dx = event.clientX - arrowX;
// 		dy = event.clientY - arrowY;
// 		angle = Math.atan2(dy, dx);
// 	});
// };