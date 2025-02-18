function setup() {
  createCanvas(400,400);
  }
function draw() {
  background(255);
  fill('#C8ACDD');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300); // rosto
  fill('white');  
  stroke('#D8A5EB');
  strokeWeight(1);
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  stroke('rgb(140,101,158)');  
  strokeWeight(4);
  line(150, 270, 250, 235); // boca
  fill('rgb(140,101,158)');
  stroke('rgb(140,101,158)');
  strokeWeight(1); 
  triangle(200, 180, 170, 220, 220, 220); // nariz
  strokeWeight(4);
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  stroke(0); 
  strokeWeight(1);
  circle(150, 150, 10); // pupila esquerda
  circle(250, 150, 10); // pupila direita
    
    if(mouseIsPressed){
        console.log(mouseX,mouseY);
    }
}


function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background(255);
  fill('#C8ACDD');
  circle(200, 200, 300); // rosto
  fill("white");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 235); // boca
  fill('rgb(140,101,158)');
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
