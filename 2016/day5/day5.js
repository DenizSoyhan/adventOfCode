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

function questionTwo(){
var testStringStart="abc";
var questionOneInput="reyedfim";

var counter=0;
var index=0;

var hash;
var digits=[]
var digitFlag=[0, 0, 0, 0, 0, 0, 0, 0];
var digitInOrder=[0, 0, 0, 0, 0, 0, 0, 0];
while(counter<8){

    hash = crypto.createHash('md5').update(questionOneInput).update(String(index)).digest('hex');
    var firstFiveChar=hash.slice(0,5);
    if(firstFiveChar=='00000' && hash[5]<8 && digitFlag[hash[5]]!=1){
        //console.log(hash);
        digitInOrder[hash[5]]=hash[6];
        digitFlag[hash[5]]=1;
        counter++;
       console.log(digitInOrder.join(""));
    }
    index++;
}

console.log("behold: "+ digitInOrder.join(""));

}
//questionOne();
//questionTwo();