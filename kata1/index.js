let Foo = "Foo";
let Bar = "Bar";
let Quix = "Quix";

function findNumber (texto, numeroConvertido) {
    for (let j=0 ; j< numeroConvertido.length; j++){
        if(numeroConvertido.charAt(j) == "3"){
            texto = texto + Foo;
        }else if(numeroConvertido.charAt(j) == "5"){
            texto = texto + Bar;
        }else if (numeroConvertido.charAt(j) == "7"){
            texto = texto + Quix;
        }
}
return (texto);
}

function check (num) {
    
    let frase = "";

    let convertido = num.toString();
    
    if(num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
        console.log(num, "-> FooBarQuix");
        //No meto mas codigo por aqui por que he comprobado que nunca sucede este if
    }else if (num % 3 == 0 && num % 5 == 0){
        frase = Foo+Bar;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);

    }else if (num % 3 == 0 && num % 7 == 0){
        frase = Foo+Quix;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);

    }else if (num % 5 == 0 && num % 7 == 0){
        frase = Bar+Quix;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);

    }else if (num % 3 == 0){
        frase = Foo;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);     
    }else if (num % 5 == 0){
        frase = Bar;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);  
    }else if (num % 7 == 0){
        frase = Quix;
        let texto = findNumber(frase, convertido);
        console.log(num, "->", texto);  
    }else{ 

        let texto = findNumber(frase, convertido);
            if (texto.length > 0){
                console.log(num, "->", texto);
            }else{
                console.log(num, "->", num);
            }
            
    //console.log(num, frase); 
    //console.log(num, "->" + frase);
    
    }
}

for (let i= 1; i<=100; i++){
    check(i);
}
