// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
yazdir();

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}
yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK2:
//*************************************************/

function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}
selamla("Mehmet", "Yilmaz");
selamla("Fadime", "Kaya");
selamla("Han");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

function yasHesapla(isim, dogumTarihi) {
  //   const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  const sonuc = `${isim} in yasi ${
    new Date().getFullYear() - dogumTarihi
  } dir.`;
  return sonuc;
  //   return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesapla("Can Yilmaz", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Kan", 1995));

//* ORNEK4:
//*****************************************************/

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}
console.log(tekCift(5));
console.log(tekCift(6));

//* ORNEK4:
//*****************************************************/

const n = +prompt("Bir sayi giriniz:");
console.log(tekCift(n));
