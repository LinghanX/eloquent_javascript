var size = 8;
var string = '';
for (var ver = 0; ver < size; ver++){
  if( ver % 2 === 0 ) {
    for (var hor = 0; hor < size; hor++) {
      if(hor % 2 === 0) {
        string = string + '#';
      } else {
        string = string + ' ';
      }
    }
    string = string + "\n";
  } else {
    if( ver % 2 !== 0 ) {
      for (var hor = 0; hor < size; hor++) {
        if(hor % 2 !== 0) {
          string = string + '#';
        } else {
          string = string + ' ';
        }
      }
    }
    string = string + "\n";
  }
}
console.log(string);
