const textoArea=document.querySelector(".texto-area");
const mensajeEncriptado=document.querySelector(".mensaje-encriptado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function botonEncriptar() {
    const textoEncriptado=encriptar(textoArea.value);
    mensajeEncriptado.value=textoEncriptado;
    textoArea.value="";
    mensajeEncriptado.style.backgroundImage="none";
}

function encriptar(cadenaDesencriptada) {
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptada=cadenaDesencriptada.toLowerCase();

    for(let i=0; i<matriz.length;i++){
        if (cadenaDesencriptada.includes(matriz[i][0])) {
            cadenaDesencriptada=cadenaDesencriptada.replaceAll(matriz[i][0],matriz[i][1]);
        }

    }
    return cadenaDesencriptada;
}



function botonDesencriptar() {
    const textoDesencriptado=desencriptar(textoArea.value);
    mensajeEncriptado.value=textoDesencriptado;
    textoArea.value="";
    mensajeEncriptado.style.backgroundImage="none";
}

function desencriptar(cadenaEncriptada) {
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptada=cadenaEncriptada.toLowerCase();

    for(let i=0; i<matriz.length;i++){
        if (cadenaEncriptada.includes(matriz[i][1])) {
            cadenaEncriptada=cadenaEncriptada.replaceAll(matriz[i][1],matriz[i][0]);
        }

    }
    return cadenaEncriptada;
}

