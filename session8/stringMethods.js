// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
let str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

const str4 = new String("Hello FS");
console.log(typeof str4);

//?----------------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

console.log(str1.concat(str2)); //* Orjinal degerler bozulmaz
console.log(str1, str2);

//? Assigning ile degiskenin degeri degistirilebilir.
str1 = str1.concat(str3, " Path");
console.log(str1);

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Noah Adams";
console.log(myName);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let yourName = "ismet";
// yourName = yourName.toUpperCase();
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

const esitMi = (srt6, srt7) => {
  return srt6.toLocaleUpperCase() == srt7.toLocaleUpperCase()
    ? `${srt6} ile ${srt7} Esittir`
    : `${srt6} ile ${srt7} Esit degildir`;
};
console.log(esitMi("merHaBa", "MERhaba"));
console.log(esitMi("hi", "welcome"));

const a = "sarTGY";
const b = "SartGy";
console.log(a.localeCompare(b, "en", { sensitivity: "case" }));

const srt8 = "Full Stack Path and Data Science Path";

console.log(srt8.charAt(srt8.length - 1));

const word = "To be or not to be, that is the question";

console.log(word.includes("to be"));
console.log(word.includes("QUEStion"));
console.log(word.includes("to be", 12));
