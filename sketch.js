
class Vehiculo{
  constructor( modelo,serie,marca,cilindraje,numeroDePasajeros,tiempoDeGarantia,valorDeImpuestos,CajaDeCambios,consumoDeGasolina,tipoDeGasolina,imagen){
  modelo= modelo;
  serie= serie;
  marca=marca;
  cilindraje=cilindraje;
  numeroDePasajeros=numeroDePasajeros;
  tiempoDeGarantia=tiempoDeGarantia;
  valorDeImpuestos=valorDeImpuestos;
  CajaDeCambios=CajaDeCambios;
  consumoDeGasolina=consumoDeGasolina;
  tipoDeGasolina=tipoDeGasolina;
  imagen= imagen;
  }
}

let miniaturaFerrari;
let miniaturaAudi;
let miniaturaRange
let miniaturaR6;
let miniaturaDaytona;
let miniaturaHonda;
const ferrari = new Vehiculo ("Black", "Gossip Girl", "Ferrari", 4 ,2 , 1+" "+"Years",200+" "+"Monopoly Bills","square","A Lot", "Expensive",miniaturaFerrari);
const audi= new Vehiculo("White","The Walking Dead","Audi",2,5,2+" "+"Years",100+" "+"Monopoly Bills","Rectangle","Midium","Vodka",miniaturaAudi);
const rangeRover= new Vehiculo("Gray","Euphoria","Range Rover",3,6,1.5+" "+"Years",300+" "+"Monopoly Bills","Triangle","Depends on how much you use it","Kim K's Tears",miniaturaRange);
//motos
const daytona= new Vehiculo("pink","Emily In Paris","Daytona",2,2,1+" "+"Years", 400+" "+"Monopoly Bills","a cute box","Not that Much","Sparkles",miniaturaDaytona);
const r6= new Vehiculo("Black","My Little Pony","R6",6,3,3+" "+"Years", 500+" "+"Monopoly Bills","Small Box","Regular","Chanel #5", miniaturaR6);
const honda= new Vehiculo("White","Squid Game","Honda",2,2,3+" "+"Years",500+" "+"Monopoly Bills","A good One","Too Much","Atention", miniaturaHonda);

const vehiculos= [ferrari,audi,rangeRover,daytona,r6,honda];
console.log(vehiculos);

let pantalla;
let principal;
let menu;
let cars;
let motos;
let favoritos;

function preload() {
  principal = loadImage('imagenes/principal.png');
  menu= loadImage('imagenes/menu.png');
  cars= loadImage('imagenes/cars.png');
  motos= loadImage('imagenes/motos.png');
  favoritos= loadImage('imagenes/favs.png');
  miniaturaFerrari= loadImage('imagenes/miniCarBlack.png');
  miniaturaAudi= loadImage('imagenes/miniCarWhite.png');
  miniaturaRange= loadImage('imagenes/miniGrayCar.png');
  miniaturaR6= loadImage('imagenes/miniMotoBlack.png');
  miniaturaDaytona= loadImage('imagenes/miniMotoRosa.png');
  miniaturaHonda= loadImage('imagenes/miniMotoWhite.png');

}

function setup() {
  pantalla=0;
  createCanvas(1400, 700);
 
}

function draw() {
  background(220);
  switch(pantalla){
  case 0:
  image(principal,0,0);
  break;
  case 1:
  image(menu,0,0);
  break;
  case 2:
  image(cars,0,0);
  break;
  case 3:
  image(motos,0,0);
  break;
  case 4:
    image(favoritos,0,0);
    break;
}
}
function mousePressed() {
  switch (pantalla) {
    case 0:
      if (dist(mouseX, mouseY, 707, 390) < 100) {
        pantalla = 1;
      }
    break;
    case 1:
      if (dist(mouseX, mouseY, 580, 490) < 100) {
        pantalla = 3;
      }
      else if(dist(mouseX, mouseY,841,490)< 100){
        pantalla= 2;
      }
    break;
    case 2:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 3;
      }
      else if(dist(mouseX, mouseY,1273,483)< 80){
        pantalla= 4;
      }
      else if(dist(mouseX,mouseY,1273,561)<80){
        pantalla=1;
      }
    break;
    case 3:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 2;
      }
      else if(dist(mouseX, mouseY,1273,483)< 80){
        pantalla= 4;
      }
      else if(dist(mouseX,mouseY,1273,561)<80){
        pantalla=1;
      }
    break;
    case 4:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 2;
      }
      else if(dist(mouseX, mouseY,1273,483)< 80){
        pantalla= 3;
      }
      else if(dist(mouseX,mouseY,1273,561)<80){
        pantalla=1;
      }
    break;
  }
}
