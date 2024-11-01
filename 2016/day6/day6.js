var fs = require('fs');

var test1="testInput.txt"
var test2="testInput2.txt"
var questionOneInput="questionOneInput.txt"


try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}
function questionOne(){

    
    var data=textFile.toString();
    data= data.split("\n");

    let lenOfPhrase;
    lenOfPhrase=data[0].length;

    var allDigits=[]

    var dictionary={

    };

    for(var i=0;i<lenOfPhrase;i++){
        for(var z=0;z<26;z++){
            dictionary[`${String.fromCharCode(97+z)}`]=0;
        }
        //console.log(dictionary);

        for(var k=0;k<data.length;k++){
            if(data[k] != '\n' ){
                //console.log(data[k][i]);
                dictionary[`${data[k][i]}`]=dictionary[data[k][i]]+1;
            }
        }
        //console.log(dictionary);

        var arrayOfItems=Object.keys(dictionary).map(function(key){
            return [key,dictionary[key]];
        })
        arrayOfItems.sort(function(a,b){
            return b[1]-a[1];
        })
        let aDigi=arrayOfItems[0][0];
        allDigits.push(aDigi);

    }

    console.log(allDigits.join(""));

}

questionOne();
