let valor = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let palo = ["S", "H", "C", "D"];
let mano1 = [];
let mano2 = [];
//la variable cartas tiene toda la baraja con sus posibles cruces.

export const cartas2 = function barajaCartas2() {
    let baraja =[];
    for( let v=0; v<valor.length; v++){
        //console.log(palo[p]);
        for(let p=0; p<palo.length; p++){
          //  console.log(valor[v]);
            baraja.push(valor[v]+palo[p]);
        }
    }
    return baraja;
    //console.log(baraja);
}



export const cartas = function barajaCartas() {
    let baraja =[];
    for( let p=0; p<palo.length; p++){
        //console.log(palo[p]);
        for(let v=0; v<valor.length; v++){
          //  console.log(valor[v]);
            baraja.push(valor[v]+palo[p]);
        }
    }
    return baraja;
    //console.log(baraja);
}


function jugador (nombre, cartas){
    this.nombre = nombre;
    this.getManoauto = function (){
        let miMano = [];
        let random = 0;
        for(let c = 0; c < 5; c++){
            random = Math.floor(Math.random() * cartas.length)
            miMano[c] = cartas[random];
            

        }

        return miMano;
    }

}


function comprobar (arrayMano){
    let misCartas = cartas();
    let validado = 0;
    for (let i=0; i < arrayMano.length; i++){
        for(let c=0; c<misCartas.length; c++){
            if(arrayMano[i] === misCartas[c]){
                validado++;
            }
        }
    }
    if (validado === 5){
        return 1;
    } 
    else{
        return -1;
    } 
}



function personaCartas (nombre, string) {
    let array = [];
    let arrValor =[];
    let arrPalo = [];
    let barajaDeCartas = cartas2();
    let arrayOrdenado = [];

    this.nombre = nombre;
    array = string.split(" ");
    this.mano = array;

    for (let number = 0; number < barajaDeCartas.length; number++){
        for(let h=0; h < array.length; h++){
            if (barajaDeCartas[number] === array[h]){
                arrayOrdenado.push(array[h]);
                
                /*
                if (a >= b) {
                    arrayOrdenado.push(array[number])
                }else {
                    arrayOrdenado.push(array[number+1])
                }*/
                
                

            }
        }
        
    }
    for (let j=0; j<arrayOrdenado.length; j++){
        arrValor.push(arrayOrdenado[j].charAt(0));
        
        arrPalo.push(arrayOrdenado[j].charAt(1));
        
    }
    this.valor = arrValor;
    this.palo = arrPalo;
    this.manoOrdenada = arrayOrdenado;
}

function escaleraColor (arrayValores, arrayPalos, mano) {
    let validado =0;

    for(let r = 0; r < arrayValores.length; r++){
        if (arrayValores[r] === "T"){
            arrayValores[r] = 10;
        }else if (arrayValores[r] === "J"){
            arrayValores[r] = 11;
        }else if (arrayValores[r] === "Q"){
            arrayValores[r] = 12;
        }else if (arrayValores[r] === "K"){
            arrayValores[r] = 13;
        }else if (arrayValores[r] === "A"){
            arrayValores[r] = 14;
        }else{        
            arrayValores[r] = parseInt(arrayValores[r]);
        }
    }

    for(let i= 0; i < arrayPalos.length; i++){
        //console.log(arrayPalos[i])
        if (arrayPalos[i] === arrayPalos[i+1]){
            //console.log("mismo palo")
            for(let h=0 ; h < arrayValores.length; h++){
                //console.log(arrayValores[h] +1 , arrayValores[h+1])
                if(arrayValores[h] +1 === arrayValores[h+1]){
                    validado++;
                }
            }
        }
    }
    
    if(validado === 12){
        return true;
    }
}



export const jugador1 = new jugador ("jugador1", cartas());
export const jugador2 = new jugador ("jugador2", cartas());

const persona1 = new personaCartas ("persona1", "AS QS JS TS 9S");
const persona2 = new personaCartas ("persona2", "2C 3H 9S 8C AH");



mano1 = persona1.mano;
mano2 = persona2.mano;

if(comprobar(mano1) === 1 /*&& comprobar(mano2) ===1*/){
    /*console.log("Mano Correcta");
    console.log(persona1.nombre, persona1.mano);
    console.log("El array de valores ordenados es: ", persona1.valor);
    console.log("El array de palos es: ", persona1.palo);
    console.log("");
    console.log(persona2.nombre, persona2.mano);
    console.log("El array de valores es: ", persona2.valor);
    console.log("El array de palos es: ", persona2.palo);*/

    if (escaleraColor(persona1.valor, persona1.palo, persona1.manoOrdenada) === true){
        console.log("escalera de color");
    }






}else {
    console.log("Alguna mano de un Jugador incorrecta, introduce unas cartas validas. Por favor no intentes hacer trampas....O_o")

}

//console.log(jugador1.nombre, jugador1.getMano());
//console.log(jugador2.nombre, jugador1.getMano());