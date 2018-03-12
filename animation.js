// svg setup
var svg = document.getElementById("vimage");
var height = svg.getAttribute("height");
var width = svg.getAttribute("width");

// buttons
var clear = document.getElementById("clear");

var isRunning = false;

var circles = [];

// clear screen
var clearCallBack = function(){
  window.cancelAnimationFrame(id);
  while(svg.firstChild){
	   svg.removeChild(svg.firstChild);
  }
};

// circle object
var circle = function(x, y, r, c){
  var c = {
    circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
    dx : 3,
  	dy : 4,
  	getX: function(){
  	    return this.circle.getAttribute("cx");
  	},
  	getY: function(){
  	    return this.circle.getAttribute("cy");
  	},
  	getRadius: function(){
  	    return this.circle.getAttribute("r");
  	},
    getColor: function(){
  	    return this.circle.getAttribute("fill");
  	},
    getDx: function(){
  	    return this.dx;
  	},
  	getDy: function(){
  	    return this.dy;
  	},
  	setX: function(x){
  	    this.circle.setAttribute("cx", x);
  	},
  	setY: function(y){
  	    this.circle.setAttribute("cy", y);
  	},
  	setRadius: function(r){
  	    this.circle.setAttribute("r", r);
  	},
    setColor: function(color){
  	    this.circle.setAttribute("fill", color);
        this.circle.setAttribute("stroke", "black");
  	},
  	setDx: function(dx){
  	    this.dx = n;
  	},
  	setDy: function(dy){
  	    this.dy = n;
  	},
    move: function(){
      if (this.getX() <= this.getRadius() || this.getX() >= width - this.getRadius()) {
        this.setDx(getDx() * -1);
      }
      if (this.getY() <= this.getRadius() || this.getY() >= height - this.getRadius()) {
        this.setDy(getDy() * -1);
      }
      this.setX(this.getX() + this.getDx());
      this.setY(this.getY() + this.getD());
    }
    display: function(){
      c.setX(x);
      c.setY(y);
      c.setRadius(r);
      c.setColor(c);
	    svg.appendChild(this.circle);
  	}
  }
  return c;
};

var animate = function(){
  circles.forEach(
    function(c){
      c.move();
    }
  )
}

var svgCallBack = function(){
  var c = circle(10,"blue");
  c.display();
  circles.push(c);
  id = window.requestAnimationFrame(animate);
};

clear.addEventListener("click", clearCallBack);
svg.addEventListener("click", svgCallBack);
