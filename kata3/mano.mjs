let valor = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let palo = ["S", "H", "C", "D"];
let mano1 = [];
let mano2 = [];
let resultadoUno = 0;
let resultadoDos = 0;
//Controlo los resultados siendo: 0=carta mas alta, 1=pareja, 2=doble pareja. 3=trio, 4=escalera, 5=color, 6=full, 7=poker, 8=escalera de color.

export const cartas2 = function barajaCartas2() {
    let baraja =[];
    for( let v=0; v<valor.length; v++){
        for(let p=0; p<palo.length; p++){
            baraja.push(valor[v]+palo[p]);
        }
    }
    return baraja;
}



export const cartas = function barajaCartas() {
    let baraja =[];
    for( let p=0; p<palo.length; p++){
        for(let v=0; v<valor.length; v++){
            baraja.push(valor[v]+palo[p]);
        }
    }
    return baraja;
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
    if(validado === 16){
        return true;
    }
}


function poker (arrayValores, arrayPalos){
    let validado =0;
    let A =0;

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

    for(let i = 0; i<arrayValores.length; i++){
        if(arrayValores[i] == arrayValores[i+1]){
            A = arrayValores[i];
            break;
        }
    }

    const filtroA = arrayValores.filter(elemento => elemento === A);
    
    if(filtroA.length == 4){
        return true;
    }
    
    

}


function full (arrayValores, arrayPalos){
    let pareja = 0;
    let trio = 0;
    let A = 0;
    let B = 0;
    let validado = 0;

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

    for(let i = 0; i<arrayValores.length; i++){
        if(arrayValores[i] == arrayValores[i+1]){
            A = arrayValores[i];
            break;
        }

    }
    for(let j=0; j<arrayValores.length; j++){
        if(arrayValores[j]== arrayValores[j+1] && arrayValores[j] !== A){
            B = arrayValores[j];
            break;
        }

    }

    const filtroA = arrayValores.filter(elemento => elemento === A);
    const filtroB = arrayValores.filter(elemento=> elemento === B);

    if(filtroA.length == 2 && filtroB.length == 3 || filtroA.length == 3 && filtroB.length == 2){
        return true;
    }

   
}


function color (arrayValores, arrayPalos){
    let validado=0;

    for (let i =0; i<arrayPalos.length; i++){
        if(arrayPalos[i] === arrayPalos[i+1]){
            validado++
        }
    }

if(validado === 4){
    return true;
}
}


function escalera (arrayValores, arrayPalos){
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

    for(let h=0 ; h < arrayValores.length; h++){
        if(arrayValores[h]+1 === arrayValores[h+1]){
            validado++;
        }
    }

    if(validado === 4){
        return true;
    }
}


function trio(arrayValores, arrayPalos){
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

    for(let h=0 ; h < arrayValores.length; h++){
        if(arrayValores[h] === arrayValores[h+1]){
            validado++;
        }
    }

    if(validado === 3){
        return true;
    }
}


function doblesParejas(arrayValores, arrayPalos){
    let A =0;
    let B =0;

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
    for(let i = 0; i<arrayValores.length; i++){
        if(arrayValores[i] == arrayValores[i+1]){
            A = arrayValores[i];
            break;
        }

    }
    for(let j=0; j<arrayValores.length; j++){
        if(arrayValores[j]== arrayValores[j+1] && arrayValores[j] !== A){
            B = arrayValores[j];
            break;
        }

    }

    const filtroA = arrayValores.filter(elemento => elemento === A);
    const filtroB = arrayValores.filter(elemento=> elemento === B);

    if(filtroA.length && filtroB.length == 2){
        return true;
    }
}


function pareja (arrayValores, arrayPalos){
    let validado =0;
    let A =0;

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

    for(let i = 0; i<arrayValores.length; i++){
        if(arrayValores[i] == arrayValores[i+1]){
            A = arrayValores[i];
            break;
        }
    }

    const filtroA = arrayValores.filter(elemento => elemento === A);
    if(filtroA.length == 2){
        return true;
    }

}


function cartaMasAlta (arrayValores){
    return arrayValores[4];


}






function ganaUno(resultadoUno){
            
    switch(resultadoUno){
        case 8: 
                return console.log(persona1.nombre, "Gana con Escalera de color");

        case 7:
                return console.log(persona1.nombre, "Gana con Poker");

        case 6:
                return console.log(persona1.nombre, "Gana con Full");

        case 5:
                return console.log(persona1.nombre, "Gana con Color");

        case 4:
                return console.log(persona1.nombre, "Gana con Escalera");

        case 3:
                return console.log(persona1.nombre, "Gana con Trio");

        case 2:
                return console.log(persona1.nombre, "Gana con Dobles Parejas");

        case 1: 
                return console.log(persona1.nombre, "Gana con Parejas");
        
        case 0: 
                return console.log(persona1.nombre, "Gana con Carta mas Alta");

    }
}


function ganaDos(resultadoDos){
            
    switch(resultadoDos){
        case 8: 
                return console.log(persona2.nombre, "Gana con Escalera de color");

        case 7:
                return console.log(persona2.nombre, "Gana con Poker");

        case 6:
                return console.log(persona2.nombre, "Gana con Full");

        case 5:
                return console.log(persona2.nombre, "Gana con Color");

        case 4:
                return console.log(persona2.nombre, "Gana con Escalera");

        case 3:
                return console.log(persona2.nombre, "Gana con Trio");

        case 2:
                return console.log(persona2.nombre, "Gana con Dobles Parejas");

        case 1: 
                return console.log(persona2.nombre, "Gana con Parejas");

        case 0: 
                return console.log(persona2.nombre, "Gana con Carta mas Alta");

    }
}



//export const jugador1 = new jugador ("jugador1", cartas());
//export const jugador2 = new jugador ("jugador2", cartas());

const persona1 = new personaCartas ("persona1", "7H 9D TD 3C AC");
const persona2 = new personaCartas ("persona2", "7H 8H 9H TH JH");



mano1 = persona1.mano;
mano2 = persona2.mano;

if(comprobar(mano1) === 1 && comprobar(mano2) ===1){
//Controlo los resultados siendo: 0=carta mas alta, 1=pareja, 2=doble pareja. 3=trio, 4=escalera, 5=color, 6=full, 7=poker, 8=escalera de color.

    if (escaleraColor(persona1.valor, persona1.palo, persona1.manoOrdenada) === true){
        console.log(persona1.nombre, "tiene una escalera de color");
        resultadoUno=8;
    }else if (poker(persona1.valor, persona1.palo, persona1.manoOrdenada) === true){
        console.log(persona1.nombre, "tiene un poker");
        resultadoUno=7;
    }else if (full(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene un full");
        resultadoUno=6;
    }else if (color(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene un color");
        resultadoUno=5;
    }else if (escalera(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene escalera");
        resultadoUno=4;
    }else if (trio(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene Trio");
        resultadoUno=3;
    }else if (doblesParejas(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene Dobles parejas");
        resultadoUno=2;
    }else if(pareja(persona1.valor, persona1.palo) === true){
        console.log(persona1.nombre, "tiene una Pareja");
        resultadoUno=1;
    }else{ 
        let cartaMasAltaUno = cartaMasAlta(persona1.valor)
        console.log(persona1.nombre, "tiene Carta mas Alta");
        resultadoUno =0;

    }
    

        
    

    


    if (escaleraColor(persona2.valor, persona2.palo, persona2.manoOrdenada) === true){
        console.log(persona2.nombre, "tiene una escalera de color");
        resultadoDos=8;
    }else if (poker(persona2.valor, persona2.palo, persona2.manoOrdenada) === true){
        console.log(persona2.nombre, "tiene un poker");
        resultadoDos=7;
    }else if (full(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene un full");
        resultadoDos=6;
    }else if (color(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene un color");
        resultadoDos=5;
    }else if (escalera(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene escalera");
        resultadoDos=4;
    }else if (trio(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene Trio");
        resultadoDos=3;
    }else if (doblesParejas(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene Dobles parejas");
        resultadoDos=2;
    }else if(pareja(persona2.valor, persona2.palo) === true){
        console.log(persona2.nombre, "tiene una Pareja");
        resultadoDos=1;
    }else{ 
        let cartaMasAltaDos = cartaMasAlta(persona1.valor)
        console.log(persona2.nombre, "tiene Carta mas Alta");
        resultadoDos =0;

    }

    console.log(resultadoUno);
    console.log(resultadoDos);

    if(resultadoUno > resultadoDos){
        ganaUno(resultadoUno)

    }else if(resultadoDos > resultadoUno){
        ganaDos(resultadoDos)
    }


        


   

}else {
    console.log("Alguna mano de un Jugador incorrecta, introduce unas cartas validas. Por favor no intentes hacer trampas....O_o")

}

//console.log(jugador1.nombre, jugador1.getMano());
//console.log(jugador2.nombre, jugador1.getMano());