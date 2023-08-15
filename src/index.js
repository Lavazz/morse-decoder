const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const letters = expr.length/10;
    let words = '';
    for (let i = 0; i < expr.length; i=i+10) {       
        let coddedWord = expr.slice(i, i + 10);       
        if (coddedWord === '**********') {
            words = words + ' ';
        } else {
            let morceLetter='';
            for(let j=0; j<10; j=j+2){          
         coddedLetter= coddedWord[j]+coddedWord[j+1];         
          if(coddedLetter==='11'){
            morceLetter+='-'
          }else if(coddedLetter==='10'){
            morceLetter+='.'
          }   
            }      
            let letter = MORSE_TABLE[morceLetter];        
            words += letter;        
        }
    }
    
    return words;
}

module.exports = {
    decode
}