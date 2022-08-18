// * ========== KARAR YAPILARI =======
// **** IF-ELSE ******
console.log("****CONDITONS****");

// const sayi = prompt("Bir sayi giriniz:")
// if( sayi > 0 ) {
//     console.log(`${sayi} pozitiftir.`);
// } else if (sayi == 0) {
//     console.log(`${sayi}'a esittir.`);
// } else {
//     console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

// //? üc tam sayidan en buyugunu bulunuz.
// *** prompt onune + yazarak number haline getirdigiinde eksi
///** sayilarida hesaplar.

// const n1 = +prompt("sayi1:")
// const n2 = +prompt("sayi2:")
// const n3 = +prompt("sayi3:")

//** 1.yontem */

// if(n1 >= n2 && n1 >= n3) {
//     console.log(`${n1} en buyuk sayidir.`);
// } else if (n2 >= n1 && n2 >= n3) {
//     console.log(`${n2} en buyuk sayidir.`);
// } else if (n3 >= n1 && n3 >= n2) {
//     console.log(`${n3} en buyuk sayidir.`);
// }

//** 2. yontem */
// let enBuyuk = n1
// if (n2 >= enBuyuk) {
//     enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//     enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur.`);

//** ornek: boolean */

// const yas = 20;
// const cinsiyet = "erkek";
// const saglikli = true;

// const kosul = yas >= 18 && cinsiyet == "erkek" && saglikli;
// if(kosul) {
//     console.log(`Askerlik yapmali`);
// } else {
//     console.log(`Askerlik yapmasi gerekmez`);
// }

//*** switch-case */

let gun = +prompt("Gun: 1-7")

switch (gun) {
    case 1:
        gun = "pazartesi";
        break;
    case 2:
        gun = "sali";
        break;
    case 3:
        gun = "carsamba";
        break;
    case 4:
        gun = "persembe";
        break;
    case 5:
        gun = "cuma";
        break;
    case 6:
        gun = "cumartesi";
        break;
    case 7:
        gun = "pazar";
        break;
    default:
        alert("Gun 1-7 arasinda olmalidir");
        break;
}
console.log(gun);

//**** ternary */
//?? ex: kaldi-gecti
// const not = +prompt("notunuzu giriniz:");
// let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// console.log(sonuc);

