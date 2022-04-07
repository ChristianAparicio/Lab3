
let miniaturaFerrari;
let miniaturaAudi;
let miniaturaRange
let miniaturaR6;
let miniaturaDaytona;
let miniaturaHonda;
let audiImagen;
let ferrariImagen;
let rangeRoverImagen;

//console.log(vehiculos);

let pantalla;
let principal;
let menu;
let cars;
let motoScreen;
let favoritos;
let botonCilindros;
let botonPasajeros;
let botonPrecio;

let ferrari;
let audi;
let rangeRover;
let daytona;
let r6;
let honda;
let vehiculos;
let carros;
let font;
let pintaCarros;
let pintaMotos;
let rosa;
let negra;
let blanca;
let add;

function preload() {
  font= loadFont("imagenes/Isabe.ttf");
  add= loadImage("imagenes/Add to favs.png");

  rosa= loadImage("imagenes/BigMotoRosa.png");
  negra= loadImage("imagenes/BigMotoNegra.png");
  blanca= loadImage("imagenes/BigMotoBlanca.png");


  principal = loadImage('imagenes/principal.png');
  menu = loadImage('imagenes/menu.png');
  cars = loadImage('imagenes/cars.png');
  motoScreen = loadImage('imagenes/motos.png');
  favoritos = loadImage('imagenes/favs.png');
  botonCilindros = loadImage('imagenes/CYLINDERS.png');
  botonPasajeros = loadImage('imagenes/NUMBER OF PASSANGERS.png');
  botonPrecio = loadImage('imagenes/PRICE.png');

  audiImagen = loadImage('imagenes/BigWhiteCar.png');
  ferrariImagen = loadImage('imagenes/BigBlackCar.png');
  rangeRoverImagen = loadImage('imagenes/BigGrayCar.png');
  miniaturaFerrari = loadImage('imagenes/miniCarBlack.png');
  miniaturaAudi = loadImage('imagenes/miniCarWhite.png');
  miniaturaRange = loadImage('imagenes/miniGrayCar.png');
  miniaturaR6 = loadImage('imagenes/miniMotoBlack.png');
  miniaturaDaytona = loadImage('imagenes/miniMotoRosa.png');
  miniaturaHonda = loadImage('imagenes/miniMotoWhite.png');

  ferrari = new Carro("Black", "Gossip Girl", "Ferrari", 4, 2, 1 + " " + "Years", 200 + " " + "Monopoly Bills", "square", "A Lot", "Expensive", miniaturaFerrari, ferrariImagen, false);
  audi = new Carro("White", "The Walking Dead", "Audi", 2, 5, 2 + " " + "Years", 100 + " " + "Monopoly Bills", "Rectangle", "Midium", "Vodka", miniaturaAudi, audiImagen, false);
  rangeRover = new Carro("Gray", "Euphoria", "Range Rover", 3, 6, 1.5 + " " + "Years", 300 + " " + "Monopoly Bills", "Triangle", "Depends on how much you use it", "Kim K's Tears", miniaturaRange, rangeRoverImagen, false);
//motos
  daytona = new Moto("pink", "Emily In Paris", "Daytona", 4, 2, 1 + " " + "Years", 400 + " " + "Monopoly Bills", "a cute box", "Not that Much", "Sparkles", miniaturaDaytona, rosa);
  r6 = new Moto("Black", "My Little Pony", "R6", 6, 3, 3 + " " + "Years", 500 + " " + "Monopoly Bills", "Small Box", "Regular", "Chanel #5", miniaturaR6,negra);
  honda = new Moto("White", "Squid Game", "Honda", 2, 2, 3 + " " + "Years", 500 + " " + "Monopoly Bills", "A good One", "Too Much", "Atention", miniaturaHonda,blanca);

 vehiculos = [ferrari, audi, rangeRover, daytona, r6, honda];
 carros = [ferrari, audi, rangeRover];
 motos = [daytona, r6, honda];
}
const carrosfavoritos = [];

function setup() {
  pantalla = 0;
  createCanvas(1400, 700);

}

function draw() {
  background(220);
  switch (pantalla) {
    case 0:
      //image(ferrari.imagen,0,0)
      image(principal, 0, 0);
      break;
    case 1:
      image(menu, 0, 0);
      break;
    case 2:
      image(cars, 0, 0);
      image(botonPrecio, 50, 401);
      image(botonPasajeros, 50, 470);
      image(botonCilindros, 50, 557);
      image(add,952,588);
      for (let i = 0; i < carros.length; i++) {
        const element = carros[i];
        image(element.imagen, 270, 80 +220*i);
      }
      fill(255);
      textFont(font);
      textSize(18);

      switch (pintaCarros) {
        case 0:
          formatoPos0();
          break;
          case 1:
            formatoPos1();
            case 2:
              formatoPos2();
              break;
              default:
          break;
      }
     

      break;
    case 3:
      image(motoScreen, 0, 0);
      image(botonPrecio, 50, 401);
      image(botonPasajeros, 50, 470);
      image(botonCilindros, 50, 557);
      image(add,952,588);
      for (let i = 0; i < motos.length; i++) {
        const element = motos[i];
        //console.log (element.imagen);
        image(element.imagen, 270, 80 +220*i);
      }
      fill(255);
      textFont(font);
      textSize(18);
      switch (pintaMotos) {
        case 0:
          formatoPos0Motos();
          break;
          case 1:
            formatoPos1Motos();
            case 2:
              formatoPos2Motos();
              break;
              default:
          break;
      }

      break;
    case 4:
      image(favoritos, 0, 0);
      for (let i = 0; i < carrosfavoritos.length; i++) {
        const ele = carrosfavoritos[i];
        image(ele.imagen, 270, 80 +220*i);
      }
      break;
  }
}

function formatoPos0(){
    text(carros[0].formato(),668,349);
    image(carros[0].imagenPrincipal,682,84);
}
function formatoPos1(){
    text(carros[1].formato(),668,349);
    image(carros[1].imagenPrincipal,682,84);
}
function formatoPos2(){
    text(carros[2].formato(),668,349);
    image(carros[2].imagenPrincipal,682,84);
}

function formatoPos0Motos(){
  text(motos[0].formato(),682,484);
  image(motos[0].imagenPrincipal,682,84);
}
function formatoPos1Motos(){
  text(motos[1].formato(),682,484);
  image(motos[1].imagenPrincipal,682,84);
}
function formatoPos2Motos(){
  text(motos[2].formato(),682,484);
  image(motos[2].imagenPrincipal,682,84);
}








function mousePressed() {
  
  console.log("X= "+mouseX);
  console.log("Y= "+mouseY);
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
      else if (dist(mouseX, mouseY, 841, 490) < 100) {
        pantalla = 2;
      }
      break;
    case 2:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 3;
      }
      else if (dist(mouseX, mouseY, 1273, 483) < 80) {
        pantalla = 4;
      }
      else if (dist(mouseX, mouseY, 1273, 561) < 80) {
        pantalla = 1;
      }
      if (mouseX>264 && mouseY >52 && mouseX<572 && mouseY<181){
        pintaCarros=0;
      }
      
      if (mouseX>257 && mouseY >516 && mouseX<568 && mouseY<654){
        pintaCarros=2;
      }

      if (mouseX>262 && mouseY >274 && mouseX<560 && mouseY<402){
        pintaCarros=1;
      }


      if (dist(mouseX, mouseY, 50, 470) < 100) {
        console.log("entro")
        ordenarNumeroDePasajerosCarros();
      }
      if (dist(mouseX, mouseY, 50, 401) < 100) {
        ordenarPrecioCarros();
      }
      if (dist(mouseX, mouseY, 50, 557) < 100) {
        ordenarCilindrosCarros();
      }

      if(dist(mouseX,mouseY,952,588)<100){
        agregarFavoritos();
      }

      
      for (let i = 0; i < carros.length; i++) {
        if (dist(mouseX, mouseY, 320, 150+(220*i)) < 100) {
          console.log(carros[i])
          
        }
      }


      /*let posX = 270;
      let posY = [];
      for (let i = 0; i < carros.length; i++) {
        posY[i] = 80 +220*i;
        
      }

      for (let i = 0; i < posY.length; i++) {
        if(dist(mouseX, mouseY, posX, posY[i]) < 80){
          console.log(posY[i])
        }
        
      }*/
      
  
      break;
    case 3:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 2;
      }
      else if (dist(mouseX, mouseY, 1273, 483) < 80) {
        pantalla = 4;
      }
      else if (dist(mouseX, mouseY, 1273, 561) < 80) {
        pantalla = 1;
      }
      
      if (dist(mouseX, mouseY, 50, 470) < 100) {
        ordenarNumeroDePasajerosMotos();
      }
      if (dist(mouseX, mouseY, 50, 401) < 100) {
        ordenarPrecioMotos();
      }
      if (dist(mouseX, mouseY, 50, 557) < 100) {
        ordenarCilindrosMotos();
      }
      if (mouseX>264 && mouseY >52 && mouseX<572 && mouseY<181){
        pintaMotos=0;
      }
      if (mouseX>271 && mouseY >272 && mouseX<560 && mouseY<402){
        pintaMotos=1;
      }

      if (mouseX>266 && mouseY >520 && mouseX<556 && mouseY<661){
        pintaMotos=2;
      }
     

      break;
    case 4:
      if (dist(mouseX, mouseY, 1273, 400) < 80) {
        pantalla = 2;
      }
      else if (dist(mouseX, mouseY, 1273, 483) < 80) {
        pantalla = 3;
      }
      else if (dist(mouseX, mouseY, 1273, 561) < 80) {
        pantalla = 1;
      }
      break;
  }

  

}

function ordenarNumeroDePasajerosCarros() {

  for (let i = 0; i < carros.length; i++) {
    for (let j = 0; j < carros.length; j++) {
      if (carros[i] !== carros[j]) {
        if (carros[i].numeroDePasajeros > carros[j].numeroDePasajeros) {
          let actual = carros[i];
          carros[i] = carros[j];
          carros[j] = actual;
          console.log(carros[j])
        }
      }
    }
  }
  

/*

  for (let i = 0; i < carros.length; i++) {
    const element = carros[i];
    image(element.imagen, 122, 412 + 62);

  }
  */
  console.log({ carros });
}


function ordenarPrecioCarros() {

  for (let i = 0; i < carros.length; i++) {
    for (let j = 0; j < carros.length; j++) {
      if (carros[i] !== carros[j]) {
        if (carros[i].precio > carros[j].precio) {
          let actual = carros[i];
          carros[i] = carros[j];
          carros[j] = actual;
          console.log(carros[j])
        }
      }
    }
  }
}
  
function ordenarCilindrosCarros() {

  for (let i = 0; i < carros.length; i++) {
    for (let j = 0; j < carros.length; j++) {
      if (carros[i] !== carros[j]) {
        if (carros[i].cilindraje > carros[j].cilindraje) {
          let actual = carros[i];
          carros[i] = carros[j];
          carros[j] = actual;
        }
      }
    }
  }
}

function ordenarCilindrosMotos() {

  for (let i = 0; i < motos.length; i++) {
    for (let j = 0; j < motos.length; j++) {
      if (motos[i] !== motos[j]) {
        if (motos[i].cilindraje > motos[j].cilindraje) {
          let actual = motos[i];
          motos[i] = motos[j];
          motos[j] = actual;
        }
      }
    }
  }
}
  
function ordenarPrecioMotos() {

  for (let i = 0; i < motos.length; i++) {
    for (let j = 0; j < motos.length; j++) {
      if (motos[i] !== motos[j]) {
        if (motos[i].precio > motos[j].precio) {
          let actual = motos[i];
          motos[i] = motos[j];
          motos[j] = actual;
        }
      }
    }
  }
}
function ordenarNumeroDePasajerosMotos() {

  for (let i = 0; i < motos.length; i++) {
    for (let j = 0; j < motos.length; j++) {
      if (motos[i] !== motos[j]) {
        if (motos[i].numeroDePasajeros > motos[j].numeroDePasajeros) {
          let actual = motos[i];
          motos[i] = motos[j];
          motos[j] = actual;
        }
      }
    }
  }
}
  function agregarFavoritos(){
    carrosfavoritos.push(pintaCarros);
    console.log(carrosfavoritos);
  }
  