

//promps still figuring out
const prompt = require('prompt-sync')({sigint: true});

let name = prompt('input')

//data for field setup
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//field function takes three parameters #ros #cols # 1-2 hard easy mode
  
function gameField(rows,cols,mode){

  // empty data holders
  let myField = []
  let stringField;
  let modeDiff;
//mode selector validation
  if(mode > 0 && mode <= 3){
   modeDiff = mode
  } else {
    throw new Error('mode difficulty not valid Select 1 for Hard, 2 for Easy')
  }
  
// nested loops for 2d array
  for(let i = 0; i <rows; i++){
    let row = [];
    for(let j = 0; j <cols; j++){
      row.push(fieldCharacter)
      //pushes field charchter
    }
    myField.push(row)
    //pushes row into array
  }

  const randObsticalsGen = Math.floor(Math.random()*(rows*cols)/modeDiff);

  //finds total number of rows and colums  
  //use this step to limit dificulty by halving the number to reduce randamly 
  //place obstuction objects 

  //for loop to find total number of row/cols
  //randomize the placement of rows and cols
  for (let i = 0; i <randObsticalsGen; i++){
    const randRow = Math.floor(Math.random()*rows)
    const randCol = Math.floor(Math.random()*cols)
//place the objects
myField[randRow][randCol] = hole;

  }
//use same method to place single hat
  const randomGoalRow = Math.floor(Math.random()*rows)
  const randomGoalCol = Math.floor(Math.random()*cols)
  myField[randomGoalRow][randomGoalCol] = hat
  //finally place start point at index 0,0
  myField[0][0] = pathCharacter

  console.log(myField)
  //use .map and .join to create string use '\n' to break lines create grid 
  stringField = myField.map(row => row.join('')).join('\n');
  console.log(stringField)

}
//call function
console.log(gameField(6,6,2))