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
    let data=textFile;
    data=data.split("\n");
    let finalRes=0;
    

    function eval(line){
        let res=0;
        let terminateMode=0;
        for(let i=0;i<line.length-3;i++){
            let currentLetter=line[i];
            let secondLetter=line[i+1];
            let thirdLetter=line[i+2];
            let fourthLetter=line[i+3];


            if(currentLetter=='['){
                terminateMode=1;
            }else if(currentLetter==']'){
                terminateMode=0;
            }

            if(currentLetter==fourthLetter && secondLetter==thirdLetter && currentLetter!=secondLetter){
                if(terminateMode){
                    res=0;
                    return res;
                }else{
                    res=1;
                }
            }
        }
        return res;
    }
    
    for(let z=0;z<data.length;z++){
        if(eval(data[z])){

            finalRes++
            //console.log(data[z]," ",eval(data[z])," ", finalRes);
        }else{
            //console.log(data[z]," ",eval(data[z])," ", finalRes);
            continue;
        }
    }

    console.log(finalRes);
}


questionOne();
