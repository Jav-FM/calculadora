//calculo y resultado
let calculo = document.getElementById("calculo");
let resultado = document.getElementById("resultado");

//operadores
let porcentaje = document.getElementById("porcentaje");
let mayorMenor = document.getElementById("mayorMenor");
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let resta = document.getElementById("resta");
let suma = document.getElementById("suma");

//acciones
let cancelar = document.getElementById("cancelar");
let borrar = document.getElementById("borrar");
let igual = document.getElementById("igual");

//numeros
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let punto = document.getElementById("punto");

//eventos numeros
uno.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "1";
    calculo.innerText=calculo.innerText + "1";
});

dos.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "2";
    calculo.innerText=calculo.innerText + "2";
});

tres.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "3";
    calculo.innerText=calculo.innerText + "3";
});

cuatro.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "4";
    calculo.innerText=calculo.innerText + "4";
});

cinco.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "5";
    calculo.innerText=calculo.innerText + "5";
});

seis.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "6";
    calculo.innerText=calculo.innerText + "6";
});

siete.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "7";
    calculo.innerText=calculo.innerText + "7";
});

ocho.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "8";
    calculo.innerText=calculo.innerText + "8";
});

nueve.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "9";
    calculo.innerText=calculo.innerText + "9";
});

cero.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + "0";
    calculo.innerText=calculo.innerText + "0";
});

punto.addEventListener("click", () => {
    resultado.innerText = resultado.innerText + ".";
    calculo.innerText=calculo.innerText + ".";
});

//eventos operadores
suma.addEventListener("click", () => {
    calculo.innerText= calculo.innerText+"+";
    resultado.innerText = "";
});

resta.addEventListener("click", () => {
    if (calculo.innerText == "") {
    resultado.innerText = resultado.innerText + "-";
    calculo.innerText = calculo.innerText + "-";
    } else {
    calculo.innerText= calculo.innerText+"-";
    resultado.innerText = "";
    }
});

multiplicacion.addEventListener("click", () => {
    calculo.innerText= calculo.innerText+"*";
    resultado.innerText = "";
});

division.addEventListener("click", () => {
    calculo.innerText= calculo.innerText+"/";
    resultado.innerText = "";
});

porcentaje.addEventListener("click", () => {
    calculo.innerText = calculo.innerText+"%";
    resultado.innerText = resultado.innerText*0.01;
});

mayorMenor.addEventListener("click", () => {
    if (resultado.innerText.value > 0) {
    calculo.innerText = "-" + calculo.innerText;
    resultado.innerText = "-" + resultado.innerText;
    } else {
        resultado.innerText = resultado.innerText.slice(1,resultad.innerText.lenght);
    }
});

//eventos acciones
cancelar.addEventListener("click", () => {
    location.reload();
});

borrar.addEventListener("click", () => {
    resultado.innerText = resultado.innerText.slice(0,-1);
    calculo.innerText = calculo.innerText.slice(0,-1);
});

igual.addEventListener("click", () => {
    if (calculo.innerText.includes("+")) {
        let sumaArray = calculo.innerText.split("+");
        for (let i = 0; i < sumaArray.length; i++) {
            sumaArray[i] = parseFloat(sumaArray[i]);
        }
        let sumatoria = sumaArray.reduce((acumulador, numero) => {
            return acumulador+numero;
        });
        resultado.innerText = sumatoria;
        return false;
    } else if (calculo.innerText.includes("-")) {
        let restaArray = calculo.innerText.split("-");
        for (let i = 0; i < restaArray.length; i++) {
            restaArray[i] = parseFloat(restaArray[i]);
        }
        let reduccion=restaArray.reduce((acumulador, numero) => {
            return acumulador-numero;
        });
        resultado.innerText = reduccion;
        return false;
    } else if (calculo.innerText.includes("*")) {
        let multiplicacionArray = calculo.innerText.split("*");
        for (let i = 0; i < multiplicacionArray.length; i++) {
            multiplicacionArray[i] = parseFloat(multiplicacionArray[i]);
        }
        let aplicarMultiplicacion=multiplicacionArray.reduce((acumulador, numero) => {
            return acumulador*numero;
        });
        resultado.innerText = aplicarMultiplicacion;
        return false;
    } else if (calculo.innerText.includes("/")) {
        let divisionArray = calculo.innerText.split("/");
        for (let i = 0; i < divisionArray.length; i++) {
            divisionArray[i] = parseFloat(divisionArray[i]);
        }
        let aplicardivision=divisionArray.reduce((acumulador, numero) => {
            return acumulador/numero;
        });
        resultado.innerText = aplicardivision;
        return false;
    } else {
        return false;
    };
});