console.log("ElementParticle Loaded - Callback");

var particle = {
    position: null,
    velocity: null,
    // gravity: null,
    mass: 1,

    create: function (x,y, speed, direction, grav) {
        //console.log(direction);
        var entity = Object.create(this);
        entity.position = vector.create(x, y);
        entity.velocity = vector.create(0,0);
        entity.velocity.setLength(speed);
        entity.velocity.setAngle(direction);
        entity.gravity = vector.create(0, grav || 0);
        return entity;
    },

    accelerate: function(accel) {
        this.velocity.addTo(accel);
    },

    update: function() {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity); 
    },

    angleTo: function(p2) {
        return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
    },

    distanceTo: function(p2) {
        var dx = p2.position.getX() - this.position.getX();
            dy = p2.position.getY() - this.position.getY();

        return Math.sqrt(dx * dx + dy * dy);
    },

    gravityTo: function(p2){
        var grav = vector.create(0,0),
            dist = this.distanceTo(p2);

        grav.setLength(p2.mass / (dist * dist));
        grav.setAngle(this.angleTo(p2));

        this.velocity.addTo(grav);
    }
};