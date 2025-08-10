function FormMayo() {
  document.getElementById(fomMayorista).style.display = "block";
  document.getElementById(fomMinorista).style.display = "none";
  document.getElementById(fomDescuento).style.display = "none";
}
function FormMino() {
  document.getElementById(fomMayorista).style.display = "none";
  document.getElementById(fomMinorista).style.display = "block";
  document.getElementById(fomDescuento).style.display = "none";
}
function FormDes() {
  document.getElementById(fomMayorista).style.display = "none";
  document.getElementById(fomMinorista).style.display = "none";
  document.getElementById(fomDescuento).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById(fomMayorista).style.display = "none";
  document.getElementById(fomMinorista).style.display = "none";

  document.getElementById(fomDescuento).style.display = "none";

  document.getElementById(mayorista).addEventListener("click", FormMayo);
  document.getElementById(minorista).addEventListener("click", FormMino);
  document.getElementById(descuento).addEventListener("click", FormDes);
});

let time = parseFloat(getElementById(time));
let cantidad = parseFloat(getElementById(cantidad));
let precio = parseFloat(getElementById(precio));

/*function iniciarCalculadora() {
  let tiempo = parseFloat(prompt(`Ingrese tiempo de impresion en minutos`));
  let precioFilamento = parseFloat(
    prompt(`Ingrese el precio del filamento por kg`)
  );
  let peso = parseFloat(prompt(`Ingrese peso de impresion en gramos`));
  insumos();
  margenGanancia();
  let costoEnergia = (gastosFijos.precioKWh * tiempo) / 60;
  let costoDesgaste = (gastosFijos.desgasteMaquina * tiempo) / 60;
  let costoPlastico = (peso * precioFilamento) / 1000;
  let precioVenta =
    (costoDesgaste + costoEnergia + costoPlastico + gastosFijos.insu) *
    gastosFijos.margenVenta;

  alert("tu precio de venta es: " + precioVenta);
}

function margenGanancia() {
  let margen = prompt(`Que tipo de venta es ?
        0. Mayorista
        1. Minorista
        2. Minorista con descuento`);

  switch (margen) {
    case "0":
      gastosFijos.margenVenta = 3;
      break;
    case "1":
      gastosFijos.margenVenta = 5;
      break;
    case "2":
      gastosFijos.margenVenta = 4;
      break;
  }
}
function insumos() {
  let consultaInsumo = prompt(`utiliza algun insumno?
        0. Si
        1. No`);

  if (consultaInsumo == 0) {
    gastosFijos.insu = parseFloat(prompt(`Ingrese monto de los insumos`));
  } else {
    gastosFijos.insu = 0;
  }
}
*/
