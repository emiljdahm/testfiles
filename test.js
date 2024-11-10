


let stringOne = "EMIL";






function encrypt(string,key){

    console.log(string,key)
    let emptyArray = string.split('')
    let ASCIIcode = [];
    let encryptCode ;


    console.log('this is the begin stage',emptyArray,key)

    //convert to ascii message and Validate Key
    if(typeof key !== 'number' || key === ' ' || key === undefined || key === null ||  isNaN(key)){
        throw new Error('Key is a nonvalid value!')
    }


    for(let i = 0; i < emptyArray.length; i++){

        //charCode saves array items as ASCII code
        let charCode = emptyArray[i].charCodeAt(0)
        //char code adds ASCII value plus key
        charCode += key
        //saves shifted message to ASCII 
        ASCIIcode.push(charCode)
     



    }
  
    console.log('encrypted message VIA ARRAY: ', ASCIIcode)
    encryptCode = ASCIIcode.map(code => String.fromCharCode(code)).join('')
    console.log('encrypted message VIA EncryptedShift Value:',encryptCode)
    return encryptCode
}

console.log('Encryption current value: ')


    



encrypt('who are you?', 6)
