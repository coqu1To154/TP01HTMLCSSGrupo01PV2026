export const cambiarFondo = () => {
    
    let colorActual = document.body.style.backgroundColor;

   
    
    if (colorActual === "rgb(127, 124, 124)") {
      
        document.body.style.backgroundColor = "rgb(167, 165, 165)"; 
        console.log("Volvimos al color original (Gris Claro)");
    } else {
        
        document.body.style.backgroundColor = "rgb(127, 124, 124)"; 
        console.log("Cambiamos al color gris oscuro");
    }
};