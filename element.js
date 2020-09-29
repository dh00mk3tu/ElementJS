console.log("The Script Has Been Loaded");

var elementBasic;

function initElement() {
    document.getElementById('component-title').innerHTML = 'Gravity Test';
    elementBasic = new component(30, 30, "#057DCD", 80, 75);
    console.log("Basic Element Loaded")
    elementArea.start();
    
}

var elementArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateElementArea, 20);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = .2;
    this.gravitySpeed = 0;
    console.log(this.gravity,this.speedX, this.speedY, this.x, this.y, this.gravitySpeed);
    this.update = function() {
        ctx = elementArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;        
    }
}

function updateElementArea() {
    elementArea.clear();
    elementBasic.newPos();
    elementBasic.update();
}