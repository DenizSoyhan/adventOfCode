var fs = require('fs');
var test1="testInput.txt"
var questionOneInput="questionOneInput.txt"

try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}

function questionOne(){
    var data=textFile.toString();

    var numPad=[];
    var numPadStart=1;
    for (var i=0;i<3;i++){
        numPad[i]=[];
        for (var k=0;k<3;k++){
            numPad[i][k]=numPadStart;
            numPadStart++;
        }
    }
    var currentHorPos=1;
    var currentVerPos=1;
    var digits=[];
    //console.log(numPad);
    for (var i=0;i<data.length;i++){
        if(data[i]!='\n'){
            if(data[i]=='U' && (currentVerPos-1)>=0){
                currentVerPos--;
            }else if (data[i]=='D' && currentVerPos+1<=2){
                currentVerPos++;

            }else if (data[i]=='L' && currentHorPos-1>=0){
                currentHorPos--;

            }else if (data[i]=='R' && currentHorPos+1<=2){
                currentHorPos++;
            }
        }else{
        
            digits.push(numPad[currentVerPos][currentHorPos]);
        }      
    }
    //console.log(digits);
    var res=digits.join("")
    console.log(res);
}

function questionTwo(){
    var data=textFile.toString();

    var numPad=[[0,0,0,0,0,0,0],  
                [0,0,0,1,0,0,0],
                [0,0,2,3,4,0,0],
                [0,5,6,7,8,9,0],
                [0,0,'A','B','C',0,0],
                [0,0,0,'D',0,0,0],
                [0,0,0,0,0,0,0]
];

    var currentHorPos=1;
    var currentVerPos=3;
    var digits=[];
    //console.log(numPad);
    for (var i=0;i<data.length;i++){
        if(data[i]!='\n'){
            if(data[i]=='U' && (numPad[currentVerPos-1][currentHorPos])!=0){
                currentVerPos--;
            }else if (data[i]=='D' && (numPad[currentVerPos+1][currentHorPos])!=0){
                currentVerPos++;

            }else if (data[i]=='L' && (numPad[currentVerPos][currentHorPos-1])!=0){
                currentHorPos--;

            }else if (data[i]=='R' && (numPad[currentVerPos][currentHorPos+1])!=0){
                currentHorPos++;
            }
        }else{
        
            digits.push(numPad[currentVerPos][currentHorPos]);
        }      
    }
    //console.log(digits);
    var res=digits.join("")
    console.log(res);
}
//questionOne();
//questionTwo();