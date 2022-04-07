
 class Carro extends Vehiculo {
    constructor(modelo,serie,marca,cilindraje,numeroDePasajeros,tiempoDeGarantia,precio,cajaDeCambios,consumoDeGasolina,tipoDeGasolina,imagen,imagenPrincipal,exist){
        super(modelo,serie,marca,cilindraje,numeroDePasajeros,tiempoDeGarantia,precio,cajaDeCambios,consumoDeGasolina,tipoDeGasolina,imagen,imagenPrincipal,exist);
    }
    formato(){
        return 'Brand: ' + this.marca + ' Model: ' + this.modelo + '\nShow: ' + this.serie + ' N° Passengers: ' + this.numPasajeros 
        + '\nCylinders: ' + this.cilindraje + '\nBox: ' + this.cajaDeCambios + '\ngasoline: ' + this.tipoDeGasolina + '\nEats: ' + this.consumoDeGasolina +
        '\nGarantía: ' + this.tiempoDeGarantia + '\nPrice: ' + this.precio;
    }
}

