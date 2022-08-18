// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? ornek: 1 den n e kadar sayilari toplayin.//

// const n = Number(prompt("bir sayi giriniz:"))

// let toplam = 0
// for(let i = 1; i<= n; i++) {
//     toplam = toplam + i;
// }
// console.log("sonuc:", toplam);

//?? ex: 0-100 arasinda 10 adet rastgele sayi ureten kodu for dongusu ile yazin./

for(let i= 1; i <= 10; i++) {
    const rastgele = Math.floor(Math.random() * 100);
    console.log(rastgele);
}

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

