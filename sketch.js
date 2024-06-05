let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio =  diametro / 2;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let meusPontos = 0;
let pontosDoOponente = 0;

let raquetada;
let pontos;
let trilha;

let colidiu = false;
function setup(){
  createCanvas(600,400);
  trilha.loop();
}
function draw(){
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRAquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteoponente);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar()
  marcaPontos();
  }
function mostraBolinha(){
  circle(xBolinha, yBolinha,diametro);
}

function movimentaBolinha(){
  if xBolinha += velocidadeXBOLINHA;
    yBolinha += velocidadeYBOLNHA;
}
function verificacolisaoBorda(){
  if(xBolinha+rsio > width ll xBolnha-raio<0){
    velovidadeXBolonha*= -1;
  }
if (yBolinha+raio>heinght ll yBolinha -raio<0){
  velocidadeYBolinha *= -1;
 }
}

functionmoatraRaquete(x,y){
    rect(x,y, raqueteComprimento,raqueteAltura);
  
    function movimentaMinhaRaquete(){
      if(keylsDown(ARROW)){
      yRaquete-= 10;
      
      }
      if (keylsDown(DOWN_ARROW)){
        yRaquete-= 10;
      }
    }
  
  function verificaColisaoRaquete(){
    if(xBolinha-raio<xRaquete+raqueteComprimento&& yBolinha + raio>yRaquete){
      velocidadeXBolinha*=-1;
      raquetada.play()
  }
}
  function verificaColilisaoRaquete(x,y){
    colidiu = collideRectCircle(x, y, raqueteComprimrnto, raqueteAltura, xBolinha,yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha*= -1;
      raquetada playO();
    }
  }
  function movimentaRaqueteOponente(){
    if(keylsDown(87)){
      yRaqueteOponente -=10
    }
    if(keylsDown(83)){
      yRaquete:Oponente +=10;
    }
  }
  
  function incluiPlacar({
    stroke(255)
  textAling(CENTER);
  textSize(16);
  fill(colorrect(255, 140, 0));
  rect(150,10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosDoOponente,470, 26);
  
  
  
  }

function marcaPonto(){
  if (xBolinha>590){
    meusPontos +=1
    ponto.play();
  }

if(xBolinha<10){
  pontosDoOponente +=1;
  ponto.play)();
 }
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto= loadSound("ponto.mp3")
  raquetada= loadSound("raquetada.mp3")