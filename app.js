require('colors');

const math = require('./proy_modules/math.js');


const main = async ()=> {
    
    console.log("holaa sena CBA\n".green);

    const numeros =[1,2,500,700,800,1500,2000];
    for(const numero of numeros ){
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumero(numero);
        console.log("el numero '%s' es '&s' invertido como numero,y '%s'como cadena",
        numero,invertidoComoNumero,invertidoComoCadena);
        
    }
    
        

    }
    
    const textos =['hola sena','hola ficha2798618','Analisis y Desarrollo de software'.red]
    for(const texto of textos){
        const textoInvertido = math.invertirTexto(texto);
        console.log("El texto '%s'", texto, textoInvertido);
    }
    const datos = [1234567, 'ADSO 2798618'.bgGreen,[2798618, 'adso'] ]
    for(let dato of datos){
const datoConvertido = math.conversionDatos(dato);
console.log(`El resultado de conversion es : ${datoConvertido}`);
    }


main();