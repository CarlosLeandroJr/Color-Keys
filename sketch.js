
function setup() {
  createCanvas(400,400);
  background(51);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW))
  {
  background("red");

  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  text("pressione as teclas de movimentação para mudar a cor do fundo",25, 20);
  
  drawSprites();
}

