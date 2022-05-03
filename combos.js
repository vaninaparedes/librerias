function Servicios (manicuria, pedicuria, pestañas){  
    this.manicuria = manicuria;
    this.pedicuria = pedicuria;
    this.pestañas = pestañas;
    }; 
  
    const combo1 = new Servicios ('Belleza de manos con esmalte', 'Belleza de pies con esmalte', 'Permanente de pestañas'); 
    
    const combo2 = new Servicios ('Belleza de manos con esmaltado semipermanente',  'Belleza de pies con esmaltado semipermanente', 'Extension de pestañas naturales'); 
    
    const combo3 = new Servicios ('Esmaltado semipermanente con nailart', 'Belleza de pies con esmaltado semipermanente', 'Extensión de pestañas tamaño medio'); 
    
    const combo4 = new Servicios ('Uñas esculpidas con esmaltado semipermanente', 'Belleza de pies con esmaltado semipermanente', 'Extension de pestañas a eleccion'); 
  
    function mostrarServicios(combo){
      return "Manicuria: " + combo.manicuria + "<br/>" + "Pedicuria: " + combo.pedicuria + "<br/>" + "Pestañas: " + combo.pestañas;
    }
  
    document.getElementById(
      'combo1').innerHTML = mostrarServicios(combo1);
  
    document.getElementById(
      'combo2').innerHTML = mostrarServicios(combo2);
  
    document.getElementById(
      'combo3').innerHTML = mostrarServicios(combo3);
  
    document.getElementById(
      'combo4').innerHTML = mostrarServicios(combo4);

localStorage.setItem("modoOscuro","true");
document.querySelector("#boton").onclick = () => {
    if (oscuro == "null"){
        localStorage.setItem("modoOscuro",true);
    }else if (oscuro == "true"){
        localStorage.setItem("modoOscuro",false);
    }else if (oscuro == "false"){
        localStorage.setItem("modoOscuro",true);
    }
    oscuro = localStorage.getItem("modoOscuro");
};