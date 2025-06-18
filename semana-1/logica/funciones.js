// 1. Saludo personalizado

function saludar (nombre){
    console.log("Hola "+nombre);
}

let nombre = prompt("Ingresa tu nombre: ");

saludar(nombre);

// 2. Suma de dos números

function sumar (num1, num2){

    return (num1+num2);
}

let numero1 = parseInt(prompt("Ingresa el primer numero"));

let numero2 = parseInt(prompt("Ingresa el segundo numero"));

alert("La suma de "+numero1+" y "+numero2+" es "+sumar(numero1, numero2));

// 3. Número par o impar

function esPar (num){
    if((num%2)==0){
        return true;
    }else{
        return false;
    }
}

let numero3 = parseInt(prompt("Ingresa un numero par o impar"));

alert(numero3+" ¿Par? "+esPar(numero3));

// 4. Calcular el área de un rectángulo

function areaRectangulo (base, altura){
    return (base*altura)
}

let base = parseInt(prompt("Ingresa la base"));

let altura = parseInt(prompt("Ingresa la altura"));

alert("El area de rectangulo es: "+areaRectangulo(base, altura));

// 5. Convertir grados Celsius a Fahrenheit

function celsiusAFahrenheit (temp){
    return (temp*1.8+32);
}

let temp = parseFloat(prompt("Ingresa tu temperatura: "));

alert("Tu temperatura en Fahrenheit es: "+celsiusAFahrenheit(temp))






