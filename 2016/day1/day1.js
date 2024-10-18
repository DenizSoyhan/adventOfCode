var fs = require('fs');
var test1="testInput.txt"
var test2="testInput2.txt"
var test3="testInput3.txt"
var test4Q2="testInputQ2-1.txt"
var questionOneInput="questionOneInput.txt"
try {  
    var data = fs.readFileSync(questionOneInput, 'utf8');
//    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

function firstQuestion(){
	var directions=[-1,+1,+1,-1,-1,+1,+1,-1,-1,+1,+1,-1] //direction multipliers in order: WEST NORTH EAST SOUTH
	var oriantation=5 // starting from NORTH
	var horOrver=0 // decide movement is horizantal or vertical 0 is hor 1 is ver
	var transformerdData = data.toString().split(", "); 
	var horVal= [];
	var verVal= [];
	
	//console.log(directions[oriantation%4]); // %4 is there so the oriantation doesn't overflow
	
	//console.log(transformerdData[1]);
	for (var i=0; i<transformerdData.length ;i++){
		//console.log(i, transformerdData[i]);

		if (horOrver%2==0){
			if (transformerdData[i][0]=='R'){
				oriantation=oriantation+1;
				horVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}else{
				oriantation=oriantation-1;
				horVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}
			
			horOrver++
		}else{
			if (transformerdData[i][0]=='R'){
				oriantation=oriantation+1;
				verVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}else{
				oriantation=oriantation-1;
				verVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}
			horOrver++;
		}
	}
	//console.log(horVal);
	//console.log(verVal);
	
	
	var totalHor=0;
	var totalVer=0;
	var res=0;
	for (var i=0;i<horVal.length;i++){
		totalHor=totalHor+horVal[i];
	}
	for (var i=0;i<verVal.length;i++){
		totalVer=totalVer+verVal[i];
	}
	
	res=(Math.abs(totalHor) + Math.abs(totalVer));
	
	console.log(res);

}

function secondQuestion(){
	const GRIDSIZE=500
	var directions=[-1,+1,+1,-1,-1,+1,+1,-1,-1,+1,+1,-1] //direction multipliers in order: WEST NORTH EAST SOUTH
	var oriantation=5 // starting from NORTH
	var horOrver=0 // decide movement is horizantal or vertical 0 is hor 1 is ver
	var transformerdData = data.toString().split(", "); 
	var horVal= [];
	var verVal= [];
	
	//console.log(directions[oriantation%4]); // %4 is there so the oriantation doesn't overflow
	

	for (var i=0; i<transformerdData.length ;i++){

		if (horOrver%2==0){
			if (transformerdData[i][0]=='R'){
				oriantation=oriantation+1;
				horVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}else{
				oriantation=oriantation-1;
				horVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}
			
			horOrver++
		}else{
			if (transformerdData[i][0]=='R'){
				oriantation=oriantation+1;
				verVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}else{
				oriantation=oriantation-1;
				verVal.push((transformerdData[i].substr(1))*directions[oriantation%4]);
			}
			horOrver++;
		}
	}
	//console.log("horizantal values:\n",horVal);
	//console.log("vertical values:\n",verVal); //now that we have these values we will tag them WEST NORTH EAST SOUTH

	
	for(var i=0;i<horVal.length;i++){
		if(horVal[i]>0){
			horVal[i]=("E"+horVal[i]);
		}else{
			horVal[i]=("W"+horVal[i]);
		}
	}

	for(var i=0;i<verVal.length;i++){
		if(verVal[i]>0){
			verVal[i]=("N"+verVal[i]);
		}else{
			verVal[i]=("S"+verVal[i]);
		}
	}

	horOrver=0;
	var que=0;
	allInstructions=[];
	for (var i=0;i<transformerdData.length;i++){
		if (horOrver%2==0){
			allInstructions.push(horVal[que]);
		}else{
			allInstructions.push(verVal[que]);
			que++;
		}
		horOrver++;
	}

	//console.log(allInstructions);
	
	let grid = [];
	for (let i = 0; i < 500; i++) {
		grid[i] = [];
		for (let j = 0; j < 500; j++) {
			grid[i][j] = 0; // Initialize with 0 or any other value
		}
	}

	var originHor= 249;
	var originVer= 249;
	var backUporiginHor= originHor;
	var backUporiginVer= originVer;
	var resCoords=[249,249]
	for (var i=0;i<allInstructions.length;i++){
		var num=Math.abs(allInstructions[i].substr(1));
		if (allInstructions[i][0]=='N'){
			for (var k=0;k<num;k++){
				if(grid[originVer-1][originHor]==0){
					grid[originVer-1][originHor]=1;
					originVer=originVer-1;
				}else{
					grid[originVer-1][originHor]='*';
					resCoords[0]=originVer-1;
					resCoords[1]=originHor;
					break;//we found the intersection
				}
			}
		}
		else if (allInstructions[i][0]=='E'){
			for (var k=0;k<num;k++){
				if(grid[originVer][originHor+1]==0){
					grid[originVer][originHor+1]=1;
					originHor=originHor+1;
				}else{
					grid[originVer][originHor+1]='*';
					resCoords[0]=originVer;
					resCoords[1]=originHor+1;
					break;//we found the intersection
				}
			}
		}
		else if (allInstructions[i][0]=='S'){
			for (var k=0;k<num;k++){
				if(grid[originVer+1][originHor]==0){
					grid[originVer+1][originHor]=1;
					originVer=originVer+1;
				}else{
					grid[originVer+1][originHor]='*';
					resCoords[0]=originVer+1;
					resCoords[1]=originHor;
					break;//we found the intersection
				}
			}
		}
		else if (allInstructions[i][0]=='W'){
			for (var k=0;k<num;k++){
				if(grid[originVer][originHor-1]==0){
					grid[originVer][originHor-1]=1;
					originHor=originHor-1;
				}else{
					grid[originVer][originHor-1]='*';
					resCoords[0]=originVer-1;
					resCoords[1]=originHor;
					break;//we found the intersection
				}
			}

		}
	}


	console.log("vertical: ", resCoords[0], " horizantal: ", resCoords[1], 
		"distance from origin: ", Math.abs((resCoords[0]-backUporiginVer)+(resCoords[1]-backUporiginHor)));
	

	
	//THIS PART IS FOR DEBUGGING ON A TEXT FILE WITH SMALLER GRIDS
	/*const writeStream = fs.createWriteStream('Output.txt');
	const pathName = writeStream.path;
	grid.forEach(row => writeStream.write(`${row.join('')}\n`));
	writeStream.end();
	*/


	

	

	
	
}
//firstQuestion();
//secondQuestion();

