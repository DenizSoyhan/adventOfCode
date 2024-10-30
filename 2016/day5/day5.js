var crypto = require('crypto');


function questionOne(){
var testStringStart="abc";
var questionOneInput="reyedfim";

var counter=0;
var index=0;

var hash;
var digits=[]
while(counter<8){

    hash = crypto.createHash('md5').update(questionOneInput).update(String(index)).digest('hex');
    var firstFiveChar=hash.slice(0,5);
    if(firstFiveChar=='00000'){
        console.log(hash);
        digits.push(hash[5]);
        counter++;
    }
    index++;
}

console.log(digits.join(""));

}

questionOne();