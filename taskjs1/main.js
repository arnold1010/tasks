let a = prompt("Введите A:");
let b = prompt("Введите B:");
let c = prompt("Введите C:");

let result = equation(a, b, c);

function equation(a, b, c) {
    let result = [];
    let D = b * b - 4 * a * c;
    if(D < 0) {
       result = undefined ;
    } else if(D === 0) {
        x = (-b + Math.sqrt(D)) / (2 * a);
        result = [x];
    } else if(D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        result = [x1, x2];
    } 
    return result;
};
console.log (result);