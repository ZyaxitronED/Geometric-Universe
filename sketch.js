//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(1000, 500);
  strokeWeight(4);
  noFill();
  frameRate(60);
  //noLoop();
  textSize(120);
}

function draw() {
  background(50);

  //rotate(random(HALF_PI), random(HALF_PI), random(HALF_PI))

fill(random(255), random(255), random(255))

  for (var i = 0; i < 300; i++) {
    push()
  	ellipse(random(width), random(height), random(150), random(150))

fill(random(255), random(255), random(255))
    if(i<100){
      rect(random(width), random(width), random(150), random(150))
      pop()
    }
  }

  fill(255, 255, 255);
  text("This is fine.", 210, 250);
}
