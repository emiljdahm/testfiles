const Calculate = {
  factorial(number){

    let pushArray = [];
    function sum(accumulator,currentValue){
      return accumulator * currentValue
    }

    if(number === 0){
      return 0
    } else if(typeof number === 'number'){
      for(let i = 0; i < number; i++){
        pushArray.push(i+1)
      }
      //return pushArray
    }else {
      return 'not a valid input'
    }

    return pushArray.reduce(sum)



    }
  }
   const factor1 = Calculate.factorial(5);
console.log(factor1)

//module.exports = Calculate;