var box1, box2;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(200, 200, 100, 50);
  box2 = new Box(300, 100, 60, 48);
}

function draw() 
{
  background(220);

  box1.show();
  box1.move();

  box2.show();
  box2.move();


}

