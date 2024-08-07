// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

// Velocidade da Bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let raqueteComprimento = 10
let raqueteAltura = 100

// Variáveis do Oponente
let xRaqueteOponente = 490;
let yRaqueteOponente = 150;
let velocidadeYOpontente;

let Colidiu = false; 

//Variáveis placar
let meusPontos = 0;
let pontosOponentes = 0;


//Variáveis da Raquete 
let xRaquete = 1
let yRaquete = 15

function setup() {
  createCanvas(500, 300);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete,yRaquete); 
    movimentaMinhaRaquete();
   //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar ();
    marcaPonto();
}  

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro)
  
}

function movimentaBolinha() {
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}
 function mostraRaquete (x, y){
    rect (x, y , raqueteComprimento, raqueteAltura)
 }

function movimentaMinhaRaquete () {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaquete (x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}


  function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

  function incluiPlacar() {
    textAlign(CENTER);
    textSize( 15)
    fill("orange");
    text(meusPontos, 100, 26);
    text(pontosOponentes, 310, 26);
}
 
function marcaPonto() {
    if (xBolinha > 490) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosOponentes += 1;
    }
}
