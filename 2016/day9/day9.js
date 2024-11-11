var fs = require('fs');
const { queryObjects } = require('v8');

var test1="testInput.txt"
var test2="testInput2.txt"
var questionOneInput="questionOneInput.txt"


try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}

function questionOne(){
    let data=textFile;
    data = data.split("\n");
    data = data.join("");
    //console.log(data);

    let decompressModeEnd;
    let instruction;
    let splittedInstruction;
    let decompressedFile=[];
    let decompressingText;
    
    for(let i=0;i<data.length;i++){
        if(data[i]=='('){

            for(let k=i;k<data.length;k++){
                if(data[k]==')'){
                    instruction=data.substring(i+1,k);
                    splittedInstruction=instruction.split('x');

                    decompressModeEnd=k;
                    decompressingText=data.substring(decompressModeEnd+1,(decompressModeEnd+Number(splittedInstruction[0])+1));

                    for(let z=0;z<splittedInstruction[1];z++){
                        decompressedFile.push(decompressingText);
                    }
                    i=decompressModeEnd+Number(splittedInstruction[0]);
                    break;

                }
                

            }
                }else{
                    decompressedFile.push(data[i]);
                }
    
    }

//console.log(decompressedFile.join("")); //final string display
console.log(decompressedFile.join("").length);
}

questionOne();
