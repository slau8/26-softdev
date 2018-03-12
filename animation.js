// svg setup
var svg = document.getElementById("vimage");
var height = svg.getAttribute("height");
var width = svg.getAttribute("width");

// buttons
var clear = document.getElementById("clear");

//var isRunning = false;

var circles = [];

// clear screen
var clearCallBack = function(){
  var curr = 0
  for (curr = 0; circles.length > curr; curr += 1) {
    clearInterval(circles[curr]);
  }

  while(svg.firstChild){
	   svg.removeChild(svg.firstChild);
  }
};

// circle object
var circle = function(x, y, r, col, dx, dy){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");


    //accessor functions
  	c.getX = function(){
  	    return this.getAttribute("cx");
        console.log('get x');
  	};
  	c.getY = function(){
  	    return this.getAttribute("cy");
        console.log('get y');
  	};
  	c.getRadius = function(){
  	    return this.getAttribute("r");
        console.log('get rad');
  	};
    c.getColor = function(){
  	    return this.getAttribute("fill");
        console.log('get col');
  	};

    //mutator functions
  	c.setX = function(x1){
  	    this.setAttribute("cx", x1);
        console.log('set y');
  	};
  	c.setY = function(y1){
  	    this.setAttribute("cy", y1);
        console.log('set x');
  	};
  	c.setRadius = function(r1){
  	    this.setAttribute("r", r1);
        console.log('set rad');
  	};
    c.setColor = function(c1){
  	    this.setAttribute("fill", c1);
        this.setAttribute("stroke", "black");
        console.log('set color');
  	};

    //display function --YES
    c.myDisplay = function(){
      svg.appendChild(this);
      console.log('displayed circle');
  	};

    //move function--YES
    c.move = function(){
      if (c.getX() <= c.getRadius() || c.getX() >= width - c.getRadius()) {
        dx = dx * -1;
      }
      if (c.getY() <= c.getRadius() || c.getY() >= height - c.getRadius()) {
        dy = dy * -1;
      }
      //new coor
      c.setX(c.getX() + dx);
      c.setY(c.getY() + dy);
      console.log('x: ' + c.getX());
      console.log('y: ' + c.getY());
      //show
      c.myDisplay();

      console.log('moving');
    };

  //attributes
  c.setX(x);
  c.setY(y);
  c.setRadius(r);
  c.setColor(col);

  var newCircle = setInterval(c.move, 20);
  circles.push(newCircle);
  return c;
  console.log('new circle made');
};


var svgCallBack = function(){
  var c = circle(Math.random() * width, Math.random() * height, 10,"blue", 3, 4);
  console.log('svgcallback');
  //c.myDisplay();
  //circles.push(c);
  //id = window.requestAnimationFrame(animate);
};

clear.addEventListener("click", clearCallBack);
svg.addEventListener("click", svgCallBack);
