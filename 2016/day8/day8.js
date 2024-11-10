var fs = require('fs');
const { queryObjects } = require('v8');

var test1="testInput.txt"
var test2="testInput2.txt"
var questionOneInput="questionOneInput.txt"

const testGridCol=7;
const testGridRow=3;

const realGridCol=50;
const realGridRow=6;

let usedGridCol=realGridCol
let usedGridRow=realGridRow

try {  
    var textFile = fs.readFileSync(questionOneInput, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}
function questionOne(){
    var data=textFile;
    var dataLines=data.split("\n");
    
    let grid = [];
	for (let i = 0; i < usedGridRow; i++) {
		grid[i] = [];
		for (let j = 0; j < usedGridCol; j++) {
			grid[i][j] = "."; // Initialize with 0 or any other value
		}
	}
    
    function displayGrid(){ // second part of the question
        for(let zz=0;zz<grid.length;zz++){
            console.log(grid[zz].join(""));
        }
        console.log();
    }
    function countGrid(){
        let res=0;
        for(let zz=0;zz<usedGridRow;zz++){
            for (let rr = 0; rr < usedGridCol; rr++) {
                if(grid[zz][rr]=='█'){
                    res++;
                }
                
            }
        }
        return res;
    }
    let aLine;

    for(let k=0;k<dataLines.length;k++){
        aLine=dataLines[k];
        aLine=aLine.split(" ");
        if(aLine[0]=='rect'){       //lightup rectangle
            let xNumber=aLine[1].split('x');
            let rectWide=Number(xNumber[0]);
            let rectTall=Number(xNumber[1]);
            for(let rt=0;rt<rectTall;rt++){
                for (let rw = 0; rw < rectWide; rw++) {
                    grid[rt][rw]='█';
                }
            }
        }else if(aLine[0]=='rotate'){
            if(aLine[1]=='column'){//column push
                
                let columnToMove=Number(aLine[2].substring(2))
                let howMuchToMove=Number(aLine[aLine.length-1]);
                for(let howMuch=0;howMuch<howMuchToMove;howMuch++){
                    let prev=grid[usedGridRow-1][columnToMove]
                for(let a=0;a<usedGridRow;a++){
                    let bu=grid[a][columnToMove];
                    grid[a][columnToMove]=prev;
                    prev=bu;
                }
                }
                
                

            }else if(aLine[1]=='row'){//row push
                
                let rowToMove=Number(aLine[2].substring(2))
                let howMuchToMove=Number(aLine[aLine.length-1]);
                
                for(let howMany=0;howMany<howMuchToMove;howMany++){
                    let prev=grid[rowToMove][usedGridCol-1]
                for(let a=0;a<usedGridCol;a++){
                    let bu=grid[rowToMove][a];
                    grid[rowToMove][a]=prev;
                    prev=bu;
                }
                }
                
            }
        }
    }
    displayGrid(); //this is the second part of the question I accidently solved it haha!
    console.log(countGrid());
}
//questionOne();