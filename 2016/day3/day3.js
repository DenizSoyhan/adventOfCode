var fs = require('fs');
const { default: test } = require('node:test');
const { text } = require('stream/consumers');
var test2="testInput2.txt"
var test3="testInput3.txt"
var questionOneInput="questionOneInput.txt"


try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}

function questionOne(){
    var data=textFile.toString();
    var dataLine = data.split("\n");

    var resCount=0;

for (var i=0; i<dataLine.length; i++){
    dataLine[i]=dataLine[i].trim();
    var nums=dataLine[i].split("  ");


    if (nums[0]!=''){
        var a = Number(nums[0]);
        var b = Number(nums[1]);
        var c = Number(nums[2]);
        
        if(
            
            ((a+b)>c) && 
            ((a+c)>b) && 
            ((b+c)>a)
        ){
            resCount++;
        }else{
            continue;
        }
    }else{
        continue;
    }

    }
    console.log(resCount);

}

function questionTwo(){

    var data=textFile.toString();
    var dataLine = data.split("\n");
    
    var resCount=0;
    var threeTriangles=[];

    for (var i=0; i<dataLine.length; i++){

        dataLine[i]=dataLine[i].trim();
        var nums=dataLine[i].split("  ");

    }

}
questionOne();
//questionTwo();
