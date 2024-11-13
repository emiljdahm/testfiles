

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(){

  }
}


function createField(){

const matrix = [[1,2,3,],
                [4,5,6,],
                [7,8,9,],
                ];
 

  for(let i = 0; i < matrix.length ;i++){
    for(let j = 0; j < matrix[i].length; j++){
    const rowString = matrix.join(fieldCharacter)
    console.log(rowString)
    }
  } 
}

createField()