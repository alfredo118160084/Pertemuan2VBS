let J;
function setup() {
  // put setup code here
  createCanvas(400,200);
  J = 0;
}

function draw() {
  // put drawing code here
  strokeWeight(8)
  stroke(0 ,255 ,255)
  background(200);
  point(200,100)
  line(0,0,50,200)

  fill(120,70,95)
  rect(150,100,20,100)
  
  strokeWeight(2)
  ellipse(150,120,20,80)
  ellipse(100,120,20,80)

  strokeWeight(2)
  stroke(113 ,70 ,95 )
  triangle(20, 20, 40, 40, 60, 20)
  arc(50,50,40,40, radians(0), radians(270))

  strokeJoin(ROUND)
  beginShape();
  vertex(300,50)// titik x1
  vertex(350,100)//titik x2
  vertex(350,15)//titik x3
  vertex(250,150)//titik x4
  endShape(CLOSE);






  for (var i=0; i<=400; i++){
    x = i
    y = 150 + 20*Math.sin(x/10)
    point(x,y)


  }
    var y = 100 + 20*Math.sin(PI*J/20)
    var r = 50 + 10*Math.sin(PI*J/20)
    J += 1
  fill(240, 192, 35)
  ellipse(250, y, r, r)

   
}