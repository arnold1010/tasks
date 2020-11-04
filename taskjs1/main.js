var a = prompt("Введите A:");
var b = prompt("Введите B:");
var c = prompt("Введите C:");

var result = Equation(a, b, c);

function Equation(a, b, c) {
    let result = [];
    let D = b * b - 4 * a * c;
    if(D < 0){
       return result = console.log ("Нет корней");
    }
    if(D == 0){
        x = (-b + Math.sqrt(D)) / (2 * a);
        return [x];
    }   
    else if(D > 0){
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    }
};
console.log (result);





