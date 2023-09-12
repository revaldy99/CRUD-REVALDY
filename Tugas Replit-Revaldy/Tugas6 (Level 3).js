// looping adalah bahasa pemrograman dan algoritma yang kegunaannya untuk mengulang sebuah perintah/intruksi yang dibuat dalam script sesuai dengan jumlah yang telah ditentukan

  for(nilai = 0; nilai < 50; nilai+=2){
    document.write("<p>Perulangan ke-"+nilai+"</p>");
  }


// const apakahPrima = (angka) => {
//   let pembagi = 0;
//   for(let i=1; i <= angka; i++){
//     if(angka%i == 0){
//       pembagi++
//     }
//   }
//   if(pembagi == 2){
//     console.log("prima")
//   }else{
//     console.log("bukan prima")
//   }
// }
 // for in
var ip=[9,3,1,6,9];       
var r;                   
for (r in ip)
{
  console.log("data nya ada ini: "+ip[r]);
}
// for of
  const favFodd =['mie','pete','rendang'];
  for (let makan of favFodd ){
    console.log(makan);
  }
// while
  var i = 1;
		while(i <= 100) {
			console.log(i);
			i++; 
		}
// do while

var i = 1;
		do {
			console.log(i)
			
			i++;
		} while(i <= 100);

function enam(num){
  for(num1 = 0; num1 < num; num1++){
    document.write("<p>Perulangan ke-"+num1+"</p>");
  }
}
enam(7);

function cekGanjilGenap(angka){
  if(angka % 2==0){
   console.log("bill genap");
  }
  else {
     
     console.log("bill ganjil");
  }
}
cekGanjilGenap(6);
