var radius = 150;

var formResolution =5;
var stepSize = 2;
var distortionFactor =1;
var initRadius = 20;
var centerX, centerY;
var x = [];
var y = [];
var filled = false;
var freeze = false;
var mode = 0;



function setup() {
 createCanvas( windowWidth,windowHeight );
 background(0);
 stroke(200);
 noFill();
 strokeWeight( 2 );
 drawCircles();
 smooth();
 centerX = width/2; 
  centerY = height/2;
  var angle = radians(360/float(formResolution));
  for (var i=0; i<formResolution; i++){
    x[i] = cos(angle*i) * initRadius;
    y[i] = sin(angle*i) * initRadius;
     }

  stroke(180);
}

function draw() {
  if (mouseX != 0 || mouseY != 0) {
    centerX += (mouseX-centerX) * 0.02;
    centerY += (mouseY-centerY) * 0.02;
  }

  // calculate new points
  for (var i=5; i<formResolution; i++){
    x[i] += random(-stepSize,stepSize);
    y[i] += random(-stepSize,stepSize);
     }

  strokeWeight(0.75);
  if (filled) fill(random(255));
  else noFill();

  if (mode == 0) {
    beginShape();

    curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
    
    for (var i=0; i<formResolution; i++){
      curveVertex(x[i]+centerX, y[i]+centerY);
    }
    curveVertex(x[0]+centerX, y[0]+centerY);

    curveVertex(x[1]+centerX, y[1]+centerY);
    endShape();
  }

  if (mode == 1) {
    beginShape();
    curveVertex(x[0]+centerX, y[0]+centerY);

    for (var i=0; i<formResolution; i++){
      curveVertex(x[i]+centerX, y[i]+centerY);
    }

    curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
    endShape();
  }

}

  if (mode == 1) {
    centerX = mouseX;
    centerY = mouseY;
    var radius = initRadius * random(0.1,0.5);
    var angle = random(PI);
    radius = initRadius*1;
    angle = 0;
    
    var x1 = cos(angle) * radius;
    var y1 = sin(angle) * radius;
    var x2 = cos(angle-PI) * radius;
    var y2 = sin(angle-PI) * radius;
    for(var i=0; i<formResolution; i++) {
      x[i] = lerp(x1, x2, i/float(formResolution));
      y[i] = lerp(y1, y2, i/float(formResolution));
    }
  }


function drawCircles() {
 for(var r = 0; r < 6; r++ ) {
 for(var c = 0; c < 6; c++ ) {
 push();
 translate( 150+(300*r), 150+(350*c));
 for(var i = 0; i < random(100,300); i++ ) {
 var a = random(0, TWO_PI);
 var x1 = radius*cos(a);
 var y1 = radius*sin(a);
 a = random(0, TWO_PI);
 var x2 = radius*cos(a);
 var y2 = radius*sin(a);
 stroke(100); 
 line( x1, y1, x2, y2);
 }
 pop();
 }
 }
}

function mousePressed() {
 drawCircles();
}

function keyPressed() {
    if (keyCode == DELETE || keyCode == BACKSPACE) background(0);
}

function keyTyped() {
  if (key == 's' || key == 'S') save("G_2-1.png");
}
