-function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
  background(lavender);
}

function draw() {
  background('lavender');
  fill('black');
  rect(0,0,width,30)
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY,10);
}
