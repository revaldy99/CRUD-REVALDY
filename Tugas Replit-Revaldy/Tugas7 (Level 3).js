//tugas 7.1
function printTriangle(num) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    for (var s = 0; s < i; s++) {
    str += '*'
    }
     str += '\n'
  }
 console.log(str);
}
printTriangle(5);


//tugas 7.2

var s = '';
var p = 5;
var lebar = 4;

for (var i = 1; i <= lebar; i++) {
  if (i == 1 || i == lebar) {
    for (var j = 1; j <= p; j++) {
      s += '*';
    }
  }
  else {
    for (var k = 1; k <= p; k++) {
      if (k == 1 || k == p) {
        s += '*';
      } else {
        s += ' ';

      }
    }
  }
  s += '\n';
}
console.log(s)
