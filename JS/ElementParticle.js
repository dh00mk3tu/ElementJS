console.log("ElementParticle Loaded - Callback");

var particle = {
    position: null,
    velocity: null,
    gravity: null,

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
    }
};