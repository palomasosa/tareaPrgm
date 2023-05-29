const btnHorarios = document.getElementById("btnVer");
const tableHorarios = document.getElementById("tableHorarios");
let bandera = false; 

btnHorarios.addEventListener("click", ()=>{if(bandera == false){
    tableHorarios.style.visibility = "visible"; 
    btnHorarios.innerHTML = "Ocultar horarios";
    bandera = true; 
}
else {
    tableHorarios.style.visibility = "hidden"; 
    btnHorarios.innerHTML = "Ver horarios";
    bandera = false; 
}})


 
// const button = document.getElementById("button");
// const pResultado = document.getElementById("resultado");

// button.addEventListener("click", hacerPiramide);

// function hacerPiramide(){
//     let numeroIngresado = document.getElementById("inputNumber").value;
//     for (let index = 0; index < numeroIngresado; numeroIngresado--) {
//         for (let index = 0; index < numeroIngresado; index++) {
//             pResultado.innerHTML = pResultado.innerHTML + numeroIngresado; 
//         }
//         pResultado.innerHTML = pResultado.innerHTML + "</br>";
//     }
// }

