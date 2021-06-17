window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		// ship = particle.create(width / 2, height / 2, 0, 0),
		// thrust = vector.create(0, 0),
		// angle = 0,
		// turningLeft = false,
		// turningRight = false,
		// thrusting = false;

		sun = particle.create(wicleardth/2, height/2, 0, 0),
		planet = particle.create(width/2 + 200, height/2, 10, -Math.PI/2);
		planet2 = particle.create(width/2 + 230, height/2, 25, -Math.PI/2);
	sun.mass = 17000;

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		planet.gravityTo(sun);
		planet.update();
		planet2.gravityTo(sun);
		planet2.update();
		context.beginPath();
		context.fillStyle = "Yellow";
		context.arc(sun.position.getX(), sun.position.getY(), 40, 0, Math.PI*2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = "Blue";
		context.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI*2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = "Green";
		context.arc(planet2.position.getX(), planet2.position.getY(), 5, 0, Math.PI*2, false);
		context.fill();

		requestAnimationFrame(update);
	}
};


// 	document.body.addEventListener("keydown", function(event) {
// 		// console.log(event.keyCode);
// 		switch(event.keyCode) {
// 			case 38: // up
// 				thrusting = true;
// 				break;
				
// 			case 37: // left
// 				turningLeft = true;
// 				break;
				
// 			case 39: // right
// 				turningRight = true;
// 				break;

// 			default:
// 				break;
				
// 		}
// 	});

// 	document.body.addEventListener("keyup", function(event) {
// 		// console.log(event.keyCode);
// 		switch(event.keyCode) {
// 			case 38: // up
// 				thrusting = false;
// 				break;
				
// 			case 37: // left
// 				turningLeft = false;
// 				break;
				
// 			case 39: // right
// 				turningRight = false;
// 				break;

// 			default:
// 				break;
				
// 		}
// 	});

// 	function update() {
// 		context.clearRect(0, 0, width, height);

// 		if(turningLeft) {
// 			angle -= 0.05;
// 		}
// 		if(turningRight) {
// 			angle += 0.05;
// 		}

// 		thrust.setAngle(angle);

// 		if(thrusting) {
// 			thrust.setLength(0.1);
// 		}
// 		else {
// 			thrust.setLength(0);
// 		}

// 		// animation goes here
// 		ship.accelerate(thrust);
// 		ship.update();

// 		context.save();
// 		context.translate(ship.position.getX(), ship.position.getY());
// 		context.rotate(angle);

// 		context.beginPath();
// 		context.moveTo(20, 0);
// 		context.lineTo(-20, -14);
// 		context.lineTo(-20, 14);
// 		context.lineTo(20, 0);
// 		if(thrusting) {
// 			context.moveTo(-20, 0);
// 			context.lineTo(-32, 0);
// 		}
// 		context.stroke();

// 		context.restore(); 	

// 		if(ship.position.getX() > width) {
// 			ship.position.setX(0);
// 		}
// 		if(ship.position.getX() < 0) {
// 			ship.position.setX(width);
// 		}
// 		if(ship.position.getY() > height) {
// 			ship.position.setY(0);
// 		}
// 		if(ship.position.getY() < 0) {
// 			ship.position.setY(height);
// 		}
	
// 		requestAnimationFrame(update);
// 	}
// };	









// console.log("ElementJS Loaded - Callback");

// window.onload = function() {
// 	var canvas = document.getElementById("canvas"),
// 		context = canvas.getContext("2d"),
// 		width = canvas.width = window.innerWidth,
// 		height = canvas.height = window.innerHeight,
		
// 		ship = particle.create(width/2, height/2, 0, 0),
// 		thurst = vector.create(0,0),

// 		particles = [];
// 		nParticles = 0;
// 		accel = vector.create(0.1, 0.1);
		


// 	// document.getElementById("generate").addEventListener("click", generate);
// 	// document.getElementById("reset").addEventListener("click", reset);

// 	// 	function generate() {
// 	// 		//console.log("inside generate function");
// 	// 		var n = document.getElementById("nParticles").value;
// 	// 		var pv = document.getElementById("velocity").value;
// 	// 		var pd = document.getElementById("direction").value;

			
// 	// 		nParticles =  n;
// 	// 		console.log("nParticles", nParticles);
// 	// 		for(var i=0; i < n; i += 1) {
// 	// 			console.log("gravity",pg);
// 	// 			// particle.create(x, y, speed, direction, gravity)
// 	// 				particles.push(particle.create(width/2, height/2,pv*Math.random(), Math.PI*pd*Math.random(), 0.3));
// 	// 		}
// 	// 		update();
// 	// 		// alert(input);
// 	// 	}

// 	// 	function reset() {
// 	// 		context.clearRect(0, 0, width, height);

// 	// 		n = 0;
// 	// 		nParticles = 0;
// 	// 		pv = 0;
// 	// 		pd = 0;
// 	// 		entity.position = vector.create(0, 0);
// 	// 		console.log("particle on reset", nParticles);
// 	// 		// requestAnimationFrame(reset);
// 	// 	}
// 	update();
// 	document.addEventListener("keydown",function(event){
// 		switch(event.keycode) {
// 			case 38: thurst.setY(-0.1); //go up
// 			console.log("up rel");
// 				break;
// 			case 40: thurst.setY(0.1); //down
// 				break;
// 			case 37: thurst.setX(-0.1); //left
// 				break;
// 			case 39: thurst.setX(0.1); // right
// 				break;
// 			default:
// 				break;
// 		}
// 	});
// 	document.addEventListener("keyup",function(event){
// 		switch(event.keycode) {
// 			case 38: thurst.setY(0); //go up
// 				console.log("up rel");
// 				break;
// 			case 40: thurst.setY(0); //down
// 				break;
// 			case 37: thurst.setX(0); //left
// 				break;
// 			case 39: thurst.setX(0); // right
// 				break;
// 			default:
// 				break;
// 		}
// 	});
 

		
		


// 		function update() {
// 			console.log("inside update function");
// 			context.clearRect(0, 0, width, height);
			

// 			ship.accelerate(thurst);
// 			ship.update();
			
// 			context.beginPath();
// 			context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI*2, false);
// 			context.fill();
// 			// for(var i=0; i<nParticles; i += 1){
// 			// 	var entity = particles[i];
// 			// 	entity.update();
// 			// 	context.beginPath();
// 			// 	context.arc(entity.position.getX(), entity.position.getY(), 4 ,0, Math.PI * 2, false);
// 			// 	context.fill();
// 			// }	
// 			requestAnimationFrame(update);
// 		}
// };







































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
