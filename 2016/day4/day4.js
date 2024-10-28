var fs = require('fs');
const { default: test } = require('node:test');
const { text } = require('stream/consumers');
var test1="testInput.txt"
var questionOneInput="questionOneInput.txt"


try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}

function questionOne(){
    var data= textFile;
    var dataLines=data.split("\n");

    var dictionary = {};
    var res=0;

    for(var i=0;i<dataLines.length;i++){
        for(var j=0;j<26;j++){
            dictionary[String.fromCharCode(97+j)]=0;
        }
        if(dataLines[i]!=''){
            var singleLine=dataLines[i];
            var elements=singleLine.split("-");

            for(var k=0;k<elements.length-1;k++){
                for(var z=0;z<elements[k].length;z++){
                    dictionary[elements[k][z]]=dictionary[elements[k][z]]+1;
                }
                
            }
            //https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
            var arrayOfItems=Object.keys(dictionary).map(function(key){
                return [key,dictionary[key]];
            })
            arrayOfItems.sort(function(a,b){
                return b[1]-a[1];
            })
            //7987[abcde]
                //-6-5-4-3-2

            var firstFiveItems=arrayOfItems.slice(0,5);
            var flag=true;
            var pivot=-2;
            for(var l = 4; l>=0; l--){
                var lastItem=elements[elements.length-1];
                if(lastItem[lastItem.length+pivot]==firstFiveItems[l][0]){
                    pivot--;
                    continue;
                }else{
                    flag=false;
                    break;
                }
                
            }
            if(flag){
                var num=elements[elements.length-1];
                let numberPart = num.slice(0, num.indexOf('['));
                res=res+Number(numberPart);
            }
        
            

        }else{
            continue;
        }
    }
    console.log(res);
}


questionOne();