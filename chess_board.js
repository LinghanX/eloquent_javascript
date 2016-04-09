var size = 8;
var string = '';
for (var ver = 0; ver < size; ver++){
  for (var hor = 0; hor < size; hor++) {
    if((hor + ver) % 2 === 0) {
      string += '#';
    } else {
      string += ' ';
    }
  }
  string += "\n";
}
console.log(string);
