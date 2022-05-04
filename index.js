function saludar(nombre){
    alert("¡Bienvenido " + nombre +" al carrito de compras de servicio de belleza!");
}
let persona = prompt("Escribe tu nombre")
saludar(persona);

const Manicuria = ("$2000")
const Pedicuria = ("$2500")
const Ambas = ("$4000")
const servicio = prompt("Escriba el servicio que desee realizarse: \n Manicuria \n Pedicuria \n Manicuria+Pedicuria \n Pestañas ");

if (servicio == "Manicuria") {
    resultado = Manicuria;
    alert("El servicio de manicuria cuesta " + Manicuria);
  } else if (servicio == "Pedicuria") {
    resultado = Pedicuria;
    alert("El servicio de pedicuria cuesta " + resultado);
  } else if (servicio == "Ambas") {
    resultado = Ambas;
    alert("El combo de manicuria y pedicuria cuesta " + resultado);
  }
  
//Combos de servicios que se pueden realizar



var manos = ["Belleza de manos", "Esmaltado comun","Esmaltado semipermanente","Esmaltado con nailart","Uñas esculpidas"];

var pies = ["Belleza de pies", "Esmaltado comun","Esmaltado semipermanente","Esmaltado con nailart"];

var  pestañas  = ["Lifting de pestañas", "Extension de pestañas","Remocion de extension de pestañas"];


let evento = "click";
document.querySelector("#btnPrincipal").addEventListener(evento, () => console.log("Click en manos"));

document.querySelector("#color").onmousedown = () => document.querySelector("#color").
style.color = "red";
document.querySelector("#color").onmouseup = () => document.querySelector("#color").
style.color = "black";

alert(localStorage.getItem("modoOscuro"));
let oscuro = localStorage.getItem("modoOscuro");


document.querySelector("#boton").addEventListener("click", () =>
  Swal.fire({
    title:"Alerta",
    text: "Esta opcion no esta disponible aun",
    icon: "warning",
    showConfirmButton: false,
  })
);