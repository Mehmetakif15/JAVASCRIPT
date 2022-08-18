console.log('app js running')


console.log(typeof 0);
console.log(typeof 3.14);
console.log(typeof 'Hello');
console.log(typeof (8>10));

let age;

console.log(age);

console.log(myAge);

//var olursa undefinied, let olursa hata veriyor.

var myAge = 40

console.log('Hello')


const c = prompt("Enter celsius: ");
const f = (c * 1.8) + 32
console.log(`${c} degree celsius is ${f} degree fahrenheit.`);


let d= prompt("enter celcius:");
let e= (9*d + (32*5)) / 5
console.log(`${d} celcius equals ${e} fahrenaite`)

const today = new Date();
console.log(`day of month is ${today.getDate()}`);
console.log(`month of year is ${today.getMonth()}`);
console.log(`year is ${today.getFullYear()}`);

let sayi1 = +prompt("sayi1")
let sayi2 = +prompt("sayi2")
let sayi3 = +prompt("sayi3")
let a = sayi1 % 10
let b = sayi2 % 10
let c = sayi3 % 10
console.log ((a==b) || (a==c) || (b==c))

// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

const sayi = prompt("Bir sayıi giriniz:")
if( sayi > 0) {
    console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0) {
    console.log(`${sayi}'a esitir.`);
} else {
    console.log(`${sayi} negatiftir.`);
}
