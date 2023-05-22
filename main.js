//variáveis globais
var bola


//pré-carregamento
function preload(){


}

//criando objetos e suas propriedades
function setup() {
  createCanvas(400,400);
  bola = createSprite(200,200,20,20);
  bola . shapeColor = "blue";

}


function draw() {
  background("white");
if(keyDown("up")){
  bola.y -= 5
  background("black")
}
if(keyDown("right")){
  bola.x += 5
  background("green")
}
if(keyDown("left")){
  bola.x -= 5
  background("yellow")
}
if(keyDown("down")){
  bola.y += 5
  background("pink")
   
}

  drawSprites();
}