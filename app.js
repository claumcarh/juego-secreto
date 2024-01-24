let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoDeElemento (elemento, texto) {
  let elemetoHTML = document.querySelector(elemento);
  elemetoHTML.innerHTML = texto;
  return;
}
function verificarIntento () {
 let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

 if (numeroDeUsuario === numeroSecreto) {
      asignarTextoDeElemento("p", `Acertaste elnúmero secreto en ${intentos} ${(intentos === 1) ? "Intento" : "Intentos"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
 } else {
      if (numeroDeUsuario > numeroSecreto) {
          asignarTextoDeElemento("p", "El número secreto es menor.");
      } else {
        asignarTextoDeElemento("p", "El número secreto es mayor.");
      }
      intentos++;
      limpiarCaja();
 }
 return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario"). value = "";
}

function generarNumeroSecreto() {
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

 console.log(numeroGenerado);
 console.log(listaDeNumerosSorteados);

 if (listaDeNumerosSorteados.length == numeroMaximo) {
  asignarTextoDeElemento("P", "Ya se sortearon todos los números posibles");
 } else {
 if (listaDeNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
 } else {
  listaDeNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
  asignarTextoDeElemento("h1", "Juego del número secreto");
  asignarTextoDeElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // limpiar caja
  limpiarCaja();
  // Indicar mensaje de intervalo de números
  // Generar el número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();
  // Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
