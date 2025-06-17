let num1 = prompt("Ingresa el primer lado: ")
let num2 = prompt("Ingresa el segundo lado: ")
let num3 = prompt("Ingresa el tercer lado: ")

if (num1+num2>num3 && num1+num3>num2 && num2+num3>num1){
    if (num1==num2==num3){
        console.log("Es un triangulo equilatero")
    }else if (num1==num2 || num1==num3 || num2==num3){
        console.log("Es un triangulo isosceles")
    }else{
        console.log("Es un triangulo escaleno")
    }
}else{
    console.error("No es un triangulo valido")
}