const valor = (ingreso) => {
  let numero = ingreso.toString().split(".")
  let numeroLongitud = numero.length
  if(numeroLongitud == 1){
    numero = numero + "." + "00"
    return numero
  }
  if(numeroLongitud == 2 && numero[1].length == 1){
    numero = numero[0] + "." + numero[1] + "0"
    return numero
  }
  if(numeroLongitud == 2 && numero[1].length == 2){
    numero = numero[0] + "." + numero[1]
    return numero
  }
  if(numeroLongitud == 2 && numero[1].length > 2){
    numero[1] = numero[1].slice(0,2)
    numero = numero[0] + "." + numero[1]
    return numero  
  }
}
let info;

fetch('https://us-central1-lucas-test-api.cloudfunctions.net/cotizaciones')
.then(response => response.json())
.then(data => info = data)
