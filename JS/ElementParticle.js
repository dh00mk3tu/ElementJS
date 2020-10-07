console.log("ElementParticle Loaded - Callback");

var particle = {
    position: null,
    velocity: null,

    create: function (x,y, speed, direction) {
        var entity = Object.create(this);
        entity.position = vector.create(x, y);
        entity.velocity = vector.create(0,0);
        entity.velocity.setLength(speed);
        entity.velocity.setAngle(direction);
        return entity;
    },

    update: function() {
        this.position.addTo(this.velocity); 
    }
};