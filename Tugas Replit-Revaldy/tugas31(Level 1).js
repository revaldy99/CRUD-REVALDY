// ini adalah Comment satu baris 
/*Type data :
  1. String => Type data yang memuat karakter/kata/kalimat diapit diantara karakter kutip satu atau kutip dua.
  2. Number => Type data yang menyimpan angka, menunjukan notasi dan operasi matematika,NaN
  3.Bigint => Type data yang menyimpan bilangan bulat melebihi rentang yang didukung oleh jenis data int.
  4.Boolean => Tipe data yang menyimpan nilai true atau false.
  5.Undefined => Merupakan Type data yang belum terdefinisikan.
  6.Null => Type tidak bernilai  
  7.Symbol => Type data primitive yang bersifat immutable(tidak dapat berubah).
  8.Object => Type data yang bersifat mutable, artinya data ini dapat dimanupulasi berdasarkan method yang disediakan.
  */
//contoh:
// 1.Tipe data String di JavaScript
const mataSaya = 2;
let umurSaya = 23;
const favFood = 'mie';
// 2. Tipe data  Number
let luas = 900;
let tinggi = -90;
let diameter = 45.09;
//3.Bigint
const bilangBesar = 9007199254740991n;
const bilanganBesarJuga = BigInt(9007199254740991);
const maksimal = BigInt(Number.MAX_SAFE_INTEGER);
//4.Boolean
const revaldy = true // boolean dengan kondisi true 
const revaldyAja = false // boolean dengan kondisi false
//5.Null 
const kamuItu = null;
//6.Undefined
var kamuCantik = true;
var sudahSahur = false;
//7.Object
let objectR = {
  negara: 'Indonesia',
  kode: 62
};
const objectI = {
  bahasa: 'PHP',
  frameWork: 'CI',
  dataBase: 'oracle'
};
const fam = {
  mo: 'ip',
  jum: 9,
  cantik: true,
  ramah: false
};

//8.Symbol
const aku = Symbol();


const angkaPertama = 90;
const angkaKedua = 19;
let hasil;

// Penjumlahan
hasil = angkaPertama + angkaKedua;
console.log(hasil);

// Pengurangan
hasil = angkaPertama - angkaKedu;
console.log(hasil);

// Pembagian
hasil = angkaPertama / angkaKedu;
console.log(hasil);

// Perkalian
hasil = angkaPertama * angkaKedu;
console.log(hasil);



