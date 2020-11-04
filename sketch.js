

var bullet, wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 50, 50);
 bullet.shapeColor="white";
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=(80,80,80)
 bullet.velocityX=speed;
 thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
       wall.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  //hasCollided();
  drawSprites();
}


function hasCollided(bullet1,wall1)
{
 bulletRightEdge=bullet1.x=bullet1.width;
 wallLeftEdge=wall1.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
return false;

}