var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="red";
  fixedrect.debug = true;

  movingrect = createSprite(300,300,50,70);
  movingrect.shapeColor="yellow";
movingrect.debug = true; 

rect1 = createSprite(300,200,50,80);
rect1.shapeColor = "red";

rect2 = createSprite(400,100,50,70);
rect2.shapeColor = "blue";

}

function draw() {
  background("green");  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

console.log(movingrect.x - fixedrect.x);
console.log(movingrect.width/2  + fixedrect.width/2);


if (isTouching(movingrect,rect2)) {
  rect2.shapeColor="pink";
    movingrect.shapeColor="blue";
} else {
  rect2.shapeColor="white";
  movingrect.shapeColor="yellow";
}

  drawSprites();
}
