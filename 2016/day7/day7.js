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

function questionTwo(){
    let data=textFile;
    data=data.split("\n");

    let secondFinalRes=0;

    function secondEval(line){
        
        let res=0;
        let terminateMode=0;

        let outsideOK=[];
        let insideOK=[];

        for(let i=0;i<line.length-2;i++){
            let currentLetter=line[i];
            let secondLetter=line[i+1];
            let thirdLetter=line[i+2];

            if(currentLetter=='['){
                terminateMode=1;
            }else if(currentLetter==']'){
                terminateMode=0;
            }

            if(currentLetter=='[' || currentLetter==']'){
                continue;
            }else if(secondLetter=='[' || secondLetter==']'){
                continue;
            }else if(thirdLetter=='[' || thirdLetter==']'){
                continue;
            }

            if(currentLetter==thirdLetter && currentLetter!=secondLetter && !terminateMode ){
                outsideOK.push(currentLetter+secondLetter+thirdLetter);

            }else if(currentLetter==thirdLetter && currentLetter!=secondLetter && terminateMode){
                insideOK.push(currentLetter+secondLetter+thirdLetter);
            }
            
        }
        
        for(let k=0;k<insideOK.length;k++){
            let controllA=insideOK[k][0];
            let controllB=insideOK[k][1];
            for(let u=0;u<outsideOK.length;u++){
                
                if(controllA==outsideOK[u][1] && controllB==outsideOK[u][0]){
                    //console.log(controllA, " ",outsideOK[u][0],controllB, " ",outsideOK[u][1],)
                    return 1;
                }else{
                    continue;
                }
            }
        }
        return 0;
    }
    
    for(let z=0;z<data.length;z++){
       if(secondEval(data[z])){
        secondFinalRes++;
       }
    }
    console.log(secondFinalRes);
}
//questionOne();
//questionTwo();