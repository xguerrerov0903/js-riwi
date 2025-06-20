// Declaracion de las variables
let nombre, edad;

// Inicio de ciclo para  repeticion hasta cumplir con una entrega valida
while (true){
    // Solicitud de variable nombre
    nombre= prompt("Dime tu nombre: ");
    // Comprobacion de que se haya realizado un ingreso de un nombre
    if (!nombre){
        // De no haber una entreda se da mensaje de error y se realiza un continue para volver a iniciar el ciclo
        alert("Error. No puedes dejar campos vacios");
        continue;
    }

    /* Inicio de ciclo para la comprobacion de un ingreso de  un elemento edad (no se revisa si es valido solo que haya un ingreso). Si realiza su propio ciclo 
    solo para comodidad del usario de no tener que volver a ingresar nombre */
    while (true){
        // Solicitud de la variable edad
        edad= prompt("Dime tu edad: ");
        // Comprobacion de que se haya realizado un valor a la variable edad 
        // Ademas de que la entreda sea unicamente numerica
        if (!edad || !(/^-?\d+(.\d+)?$/.test(edad))){
            // De no haber un valor se entrega mensaje de error y se vuelve al inicio del ciclo que solicita la edad
            alert("Error. No puedes dejar campos vacios o trataste de ingresar letras");
            continue;
        }
        break;
    }

    // Combierte a la variable edad en un int (si es que existen decimales los ignora y solo entrega el entero). En caso de que la cadena no sea numerica entrega NaN
    edad= parseInt(edad); 

    // Se comprueba tanto que el valor edad sea  un numero (en el while de la entrada numerica ya se hace pero se deja ya que el ejercici se propuso originalmente con este condicional), como que sea un numero positivo
    if (isNaN(Number(edad)) || edad<0){
        /*Aun que el ejercicio propone usar console.error no es la mejor opcion, el mensaje de error se ve en la consola saliendo de la estatica de los mensaje 
        que eran en un alert, el usuario no entenderia que error tiene a menos que consulte consola, por eso se opta por mejor usar un alert*/
        // console.error("Error. Entrada de edad invalidad, ingresa un valor numerico entero positivo");
        alert("Error. Entrada de edad invalidad, ingresa un valor numerico positivo")
    // En caso de que edad sea menor a 18 años se entrega el siguiente mensaje
    } else if(edad<18){
        alert("Hola "+nombre+", eres menor de edad. ¡Sigue aprendiendo y disfruta del codigo!");
        break;
    // En caso de que edad sea mayor o igual a 18 años se entrega el siguiente mensaje
    } else {
        alert("Hola "+nombre+", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
        break;
    }
}
