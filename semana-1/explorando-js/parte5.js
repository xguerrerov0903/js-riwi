let numero1= prompt("Dime un numero: ");

if(numero1==10){
    console.log(numero1+" es igual a 10");
}else if(numero1>10){
    console.log(numero1+" es mayor a 10");
}else{
    console.log(numero1+" es menor a 10");
}

let nombre1= prompt("Dime un nombre: ");

if(nombre1=="Admin"){
    console.log("Bienvenido Sr/Sra administrador");
}else{
    console.log("Bienvenido usuario");
}

let numero2= prompt("Ingresa otro numero: ");

let status= ((numero2%2)==0)? 'Par' : 'Impar';

console.log(status);