// 1. Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.  s = ancho * alto.

function AreaRectangulo (a, b){
        return a * b;
    }
valor  = AreaRectangulo(40,3);
console.log(valor)
valor2= valor * 2
console.log(valor2)
valor3 = AreaRectangulo(30,80)
console.log(valor3)

// 2.Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.

function velocidad (a){
    let metros=(a) / 3.6;
    let millas = (a) / 1.60934;
    return "Los kilometros son "+a+", trnsformados a metros "+metros+" y a millas "+millas;
}

kilometros = 70;
console.log(velocidad(kilometros))
console.log(velocidad(90))

// 3. Por medio de una función calcula la circunferencia de un círculo por medio de la siguiente fórmula c = 2*Math.PI*Radio, también Crea y llama una función que recibe un número y calcula su cubo.

function calcularCircunferencia(radio) {
    const circunferencia = 2 * Math.PI * radio;
    return circunferencia;
  }
  function calcularCubo(numero) {
    const cubo = numero ** 3;
    return cubo;
  }
  console.log("La circunferencia del círculo es:", resultadoCircunferencia);
  console.log("El cubo de", numeroACubar, "es:", resultadoCubo);

// 4.Crea una función donde pases como parámetro un nombre y muéstralo en el navegador; Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese un nombre válido. (lo puedes hacer con la función isNaN(), investiga cómo funciona)

function nombre (a){
    if(isNaN(a)){
        document.write(a)
    }else{
        document.write("Ingresa un nombre valido");
    }
}
ingresaNombre = prompt("ingresa un nombre: ");
nombre(ingresaNombre)

// 5. Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función. 

function obtenerNumeros() {
    const n1 = parseFloat(prompt("Ingrese el primer número:"));
    const n2 = parseFloat(prompt("Ingrese el segundo número:"));
    return   
   { numero1, numero2 };
  }

function operaciones (n1, n2, s) {
    if (s == "+") {
        return n1 + n2;
    }else if(s == "-"){
        return n1 - n2;
    }else if(s == "*"){
        return n1 * n2;
    }else if(s == "/"){
        if (n2 == 0) {
            return "No se puede dividir por cero";
        }else{
            return  n1 / n2;
        }
    }else{
        return "El signo no es valido";
    }
}

// 6. Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
// Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
// Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
// Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
// Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.

function convertirTemperatura(temperatura, unidad) {
    if (unidad === 'C') {

      // Convertir de Celsius a Fahrenheit
      return (temperatura * 9/5) + 32;
    } else if (unidad === 'F') {

      // Convertir de Fahrenheit a Celsius
      return (temperatura - 32) * 5/9;
    } else {
      console.error("Unidad de temperatura no válida. Use 'C' para Celsius o 'F' para Fahrenheit.");
      return;

    }
  }
  function mostrarMensaje(temperatura, unidad) {
    const temperaturaConvertida = convertirTemperatura(temperatura, unidad);
  
    if (temperaturaConvertida <= 0 || temperatura <= 32) {
      console.log("Nos congelamos");
    } else if (temperaturaConvertida >= 5 && temperaturaConvertida <= 15 || temperatura >= 33 && temperatura <= 50) {
      console.log("Está haciendo frío");
    } else if (temperaturaConvertida >= 16 && temperaturaConvertida <= 25 || temperatura >= 51 && 
    temperatura <= 77) {
      console.log("Está templado el día");
    } else {
      console.log("Tiene fiebre o es el apocalipsis");
    }
  }
  const temperaturaIngresada = parseFloat(prompt("Ingrese la temperatura:"));
  const unidadIngresada = prompt("Ingrese la unidad (C para Celsius, F para Fahrenheit):");
  
  // Mostrar el mensaje correspondiente
  mostrarMensaje(temperaturaIngresada, unidadIngresada);

// 7. Calcule el índice de masa muscular de una persona con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
//  Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
// Si el IMC es 18.5—24.9 : Normal
// Si el IMC es 25.0—29.9 : Sobrepeso 
// Si el IMC es 30.0 o más : Obeso debe ir al nutricionista
  
  function evaluarIMC(imc) {
    if (imc < 18.5) {
      console.log("Bajo peso. Debe ir al nutricionista.");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obeso. Debe ir al nutricionista.");
    }
  }
  
  const peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
  const altura = parseFloat(prompt("Ingrese su altura en centímetros:"));
  
  const imcCalculado = calcularIMC(peso, altura);
  evaluarIMC(imcCalculado);

// 8. Cree una función que pida el nombre del usuario, y por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre.

function obtenerNombre() {
    let nombre = prompt("Ingrese su nombre:");
    return nombre;
  }
  
  function saludar(nombre) {
    console.log("Bienvenido, " + nombre + "!");
  }
  
  let nombreUsuario = obtenerNombre();
  saludar(nombreUsuario);

// 9. Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
// producto 1              = 2.500 
// producto 2         	    = 4.500 
// producto 3              = 2000 
// subtotal                10.000
// Total A pagar   12.200

function obtenerPreciosProductos() {
    const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));
    const precios = [];
  
    for (let i = 1; i <= cantidadProductos; i++) {
      const precioProducto = parseFloat(prompt("Ingrese el precio del producto" +i));
    }
    return precios;
  }
  
  function calcularTotalConIVA(precios) {
    const iva = 0.19;
    let subtotal = 0;
    const preciosConIVA = [];
  
    for (let i = 0; i < precios.length; i++) {
      const precio = precios[i];
      const precioConIVA = precio * (1 + iva);
      preciosConIVA.push(precioConIVA);
      subtotal += precio;
    }
    const total = subtotal * (1 + iva);
  
    console.log("Precio de cada producto:");
    for (let i = 0; i < preciosConIVA.length; i++) {
      console.log("Producto "+(i + 1) +" "+ preciosConIVA[i]);
    }
  
    console.log("Subtotal"+ subtotal);
    console.log("Total a pagar (con IVA): "+total);
  }
  
  // Obtener los precios 
  const preciosProductos = obtenerPreciosProductos();
  // Calcular el total 
  calcularTotalConIVA(preciosProductos);


// 10. Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.

function obtenerFechaActual() {
    const fechaActual = new Date();
    return fechaActual;
  }
  
  function calcularDiasYSemanasRestantes(fechaActual) {
    // Obtener el último día del año
    const ultimoDiaDelAno = new Date(fechaActual.getFullYear() + 1, 0, 0);
    const diferenciaEnMilisegundos = ultimoDiaDelAno - fechaActual;
    const diasRestantes = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    const semanasRestantes = Math.floor(diasRestantes / 7);
  
    console.log("Faltan" +diasRestantes+" días para que termine el año.");
    console.log("Faltan" +semanasRestantes +" semanas para que termine el año.");
  }
  // Obtener la fecha actual
  const fechaDeHoy = obtenerFechaActual();
  //días y semanas restantes
  calcularDiasYSemanasRestantes(fechaDeHoy);

//   11.Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto por medio de otra función imprima la información digitadas.
//   1 -  arroz $ 2.500 x 3 = 7.500
//   2 - aceite $ 4.500 x 1 = 4.500
//   3 - azúcar $ 2000 x 2 = 4.000
//   —-----------------------------------
//           Total Mercado    16.000

function crearListaDeCompras() {
    const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));
    const listaCompras = [];
  
    for (let i = 1; i <= cantidadProductos; i++) {
      const nombreProducto = prompt("Ingrese el nombre del producto" +i);
      const precioProducto = parseFloat(prompt("Ingrese el precio del producto" +i));
      const cantidad   
   = parseInt(prompt("Ingrese la cantidad a comprar del producto" +i));
      const totalProducto = precioProducto * cantidad;
  
      listaCompras({
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidad,
        total: totalProducto
      });
    }
  
    return listaCompras;
  }
  
  function imprimirListaDeCompras(listaCompras) {
    let totalGeneral = 0;
    console.log("Lista de compras:");
    console.log("Total Mercado: "+ totalGeneral);
  }
  const lista = crearListaDeCompras();
  imprimirListaDeCompras(lista);