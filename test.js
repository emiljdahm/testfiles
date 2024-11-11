/*
function encrypt(string,key){

    let emptyArray = string.split('')
    let ASCIIcode = [];
    let encryptCode ;

    console.log('The code key value is:' + key)
    console.log('The origional message to be encoded: ' + string)

    //convert to ascii message and Validate Key
    if(typeof key !== 'number' || key === undefined || key === null ||  isNaN(key)){
        throw new Error('Key is a nonvalid value!');
    }

    for(let i = 0; i < emptyArray.length; i++) {

        //charCode saves array items as ASCII code
        let charCode = emptyArray[i].charCodeAt(0)


        if(charCode >= 65 && charCode <= 90){

            let newCharCode = mod(charCode - 65 + key, 26) + 65 ;

         ASCIIcode.push(newCharCode)

            } 
            
            else if (charCode >= 97 && charCode <= 122) {

             let newCharCode = mod(charCode - 97 + key, 26) + 97;

             ASCIIcode.push(newCharCode);

        } 
        
        else 

            ASCIIcode.push(charCode) 

    }          


    encryptCode = ASCIIcode.map(code => String.fromCharCode(code)).join('')
    console.log('encrypted message output:',encryptCode)
    return encryptCode

}

function decrypt(string,key){

    let emptyArray = string.split('')
    let ASCIIcode = [];
    let encryptCode ;

    console.log('The encryption key value is:' + key)
    console.log('The encrypted message:' + string)

    //convert to ascii message and Validate Key
    if(typeof key !== 'number' || key === undefined || key === null ||  isNaN(key)){
        throw new Error('Key is a nonvalid value!');
    }

    for(let i = 0; i < emptyArray.length; i++) {

        //charCode saves array items as ASCII code
        let charCode = emptyArray[i].charCodeAt(0)


        if(charCode >= 65 && charCode <= 90){

            let newCharCode = mod(charCode - 65 - key, 26) + 65 ;

         ASCIIcode.push(newCharCode)

            } 
            
            else if (charCode >= 97 && charCode <= 122) {

             let newCharCode = mod(charCode - 97 - key, 26) + 97;

             ASCIIcode.push(newCharCode);

        } 
        
        else 

            ASCIIcode.push(charCode) 

    }          


    encryptCode = ASCIIcode.map(code => String.fromCharCode(code)).join('')
    console.log('Decrypted message output:',encryptCode)
    return encryptCode

}


encrypt('hello', 1 )
decrypt('ifmmp', 1 )

*/

//correct JS incorrect mod function 


class ShiftCipher {
    constructor(string, key){
    this._string = string;
    this._key = key;
    this._encryptedMessage = ''
    }

    set key(newKey){
        this._key = newKey
    }

    get key(){
       return this._key
    }

    set string(newString){
        this._string = newString;
    }

    get string(){
        return this._string;
    }


    encrypt(){

        let emptyArray = this._string.split('')
        let ASCIIcode = [];
        let encryptCode ;
    
        console.log('The code key value is:' + this._key)
        console.log('The origional message to be encoded: ' + this._string)
    
        //convert to ascii message and Validate Key
        if(typeof this._key !== 'number' || this._key === undefined || this._key === null ||  isNaN(this._key)){
            throw new Error('Key is a nonvalid value!');
        }
    
        for(let i = 0; i < emptyArray.length; i++) {
    
            //charCode saves array items as ASCII code
            let charCode = emptyArray[i].charCodeAt(0)
    
    
            if(charCode >= 65 && charCode <= 90){
    
                let newCharCode = this.mod(charCode - 65 + this._key, 26) + 65 ;
    
             ASCIIcode.push(newCharCode)
    
                } 
                
                else if (charCode >= 97 && charCode <= 122) {
    
                 let newCharCode = this.mod(charCode - 97 + this._key, 26) + 97;
    
                 ASCIIcode.push(newCharCode);
    
            } 
            
            else 
    
                ASCIIcode.push(charCode) ;
    
        }          
    
    
        encryptCode = ASCIIcode.map(code => String.fromCharCode(code)).join('');

        this._encryptedMessage = encryptCode;

        return 'Encoded message: ' + encryptCode;
    
    }

    decrypt(){


        let decryptkey = -this._key;
        let emptyArray = this._encryptedMessage.split('');
        let ASCIIcode = [];
        let decryptCode ='';
    
        console.log('The encryption key value is:' + decryptkey)
    
    
        //convert to ascii message and Validate Key
        if(typeof this._key !== 'number' || this._key === undefined || this._key === null ||  isNaN(this._key)){
            throw new Error('Key is a nonvalid value!');
        }
    
        for(let i = 0; i < emptyArray.length; i++) {
    
            //charCode saves array items as ASCII code
            let charCode = emptyArray[i].charCodeAt(0)
    
    
            if(charCode >= 65 && charCode <= 90){
    
                let newCharCode = this.mod(charCode - 65 + decryptkey, 26) + 65 ;
    
             ASCIIcode.push(newCharCode)
    
                } 
                
                else if (charCode >= 97 && charCode <= 122) {
    
                 let newCharCode = this.mod(charCode - 97 + decryptkey, 26) + 97;
    
                 ASCIIcode.push(newCharCode);
    
            } 
            
            else 
    
                ASCIIcode.push(charCode) 
    
        }          
    
    
        decryptCode = ASCIIcode.map(code => String.fromCharCode(code)).join('')
        return 'Decoded message: ' + decryptCode
    
    }
//not a paramater but individual function
    mod(n,p){

        let r = n%p;
    
        if(r < 0 ){
    
        r += p
    
        }
    
        return r;
    }

}


const code1 = new ShiftCipher('hello', 1)

console.log(code1.encrypt());  // Encrypts the string
console.log(code1.decrypt());  // Decrypts the string