function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}
for (var n = 0;n <= 5;n++) {
    rect ();
    rect (n);
}

function draw() {
  noStroke();
  square (0,220,100,100);
  fill ('red')

}