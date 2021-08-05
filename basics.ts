// Starting here
function add(num1: number, num2: number, phrase: string) {
    return phrase + (num1 + num2);
}
let number1 = 5;
let number2 = 10;
let total = add(number1, number2, "heyooo");
console.log("🚀 ~ file: app.ts ~ line 13 ~ total", total);


// Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

var a = 2;
var b = 3;    
var c = ((a < b) ? 'minor' : 'major');