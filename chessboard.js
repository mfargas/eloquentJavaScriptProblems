// //Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.//

let size = 8;

let brick = '#';

let space = ' ';

for(let i = 0; i < size; i++){
    let line = '';

    for( let j = 0; j < size; j++){

     if (i%2) {
        if (j%2) {
            line = line + space;
        } else {
            line = line + brick;
         } 

    } else {
        if (j%2){
            line = line + brick;
         } else {
            line = line + space;
         }
     }
  }
    console.log(line);
}