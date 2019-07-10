let numRomano = "";
let numArabe = 0;

/* /////////// FUNCION PASAR A ROMANOS  ///////////////////*/
function toRoman(num){
let roman = ""; 

let diccionario = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    if (typeof num !== "number") {
        console.log("Introduce numero valido");
    }else if (typeof num === "number"){
        for (let key in diccionario) {
            while (num >= diccionario[key]){
                //console.log("num es:", num) -> para ir viendo como va num
                roman += key;
                num -= diccionario[key];
               
                //console.log("roman es: ", roman) -- > Para ir viendo como se añaden las letras de nº romanos.
                
            }
        }
    return roman;
        
    }
}

/* /////////// FUNCION PASAR A ARABES  ///////////////////*/
function toArab(string) {
    let total =0;
    let letra = "";
    let num = 0;
    let numSiguiente = 0;
    let arabe = 0;
    
    function letraToNumero(letra){
        switch(letra){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
     }
     
    if (typeof string !== "string") {
        console.log("Introduce un numero Romano valido");
    }else{
        for (i=0; i<string.length; i++){
            num = letraToNumero(string[i]);
            numSiguiente= letraToNumero(string[i+1]);
            if(num < numSiguiente){
                total = total - num;
            }else{
                total = total + num;
            }
        }
        return total;
    }
    }
    

    numRomano = toRoman(1234);
    console.log("El numero Romano es: ", numRomano);

    numArabe = toArab("MDCCCLXXIV");
    console.log("El numero Arabe es: ", numArabe);

    
