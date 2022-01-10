//calcular areas de las figuras
function triangulo (base,altura){
    var area = (base * altura)/2;
    return area;
}

function circulo(radio){
    area = 3.1416 * (radio*radio);
    return area;
}

function cuadrado(lado){
    area = lado * 4;
    return area;
}

let choose = prompt("Operacion a realizar: \n1.Area Circulo\n2.Area Cuadrado\n3.Area Triangulo: ");

switch(choose) {
    case '1':
        let radio = prompt("Ingresa el radio del circulo: ");
        alert("El area del circulo es: "+circulo(radio)+"cm^2");
        break;
    case '2':
        let lado = prompt("Ingresa el lado del cuadrado: ");
        alert("El area del cuadrado es: "+cuadrado(lado)+"cm^2");
        break;
    case '3':
        let base = prompt("Ingresa la base del triangulo: ");
        let altura = prompt("Ingresa la altura del triangulo: ");
        alert("El area del triangulo es: "+triangulo(base,altura)+"cm^2");
        break;
    default:
        alert("Opcion incorrecta");
}