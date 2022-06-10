const  mostrarHora = () =>{
    let fecha = new Date();
    let hr = formato(fecha.getHours());
    let minutos = formato(fecha.getMinutes());
    let segundos = formato(fecha.getSeconds());

    let dia = formato(fecha.getDay());
    let mes = formato(fecha.getMonth());
    let año = fecha.getFullYear();

    document.getElementById("hora").innerHTML = `<p>${hr}:${minutos}:${segundos}</p>
    <p class = "fecha">${dia}/${mes}/${año}</p>`;
}

const formato = (hora) =>{
    if(hora < 10){
        hora = "0" + hora;
    }    
    return hora;
}

setInterval(mostrarHora, 1000);