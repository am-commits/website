// Written by: Andreas Michailidis, November 2020

function barchart(c1,c2,c3,c4){ // Draws the bar chart
	var canvas = document.getElementById("graph");
	var context = canvas.getContext("2d");
	var height=250
	var width=300
	context.lineWidth=1;
	context.clearRect(0,0,600,400);
	context.beginPath();
	context.rect(30,40,width,height)
	context.stroke()
	context.beginPath();
	// Bars for com1001
	context.fillStyle=c1;	
	context.font= "16px Helvetica";
	context.fillText("COM1002",40,15);
	context.rect(40,250,10,40); //Mon
	context.rect(85,250,10,40); //Tue
  	context.rect(125,214,10,76); //Wed
	context.rect(165,40,10,250); //Thurs
	context.rect(205,250,10,40); //Fri
	context.rect(245,214,10,76); //Sat
	context.rect(285,250,10,40); //Sun
	context.fill();
	context.beginPath()
	//Bars for com1003
	context.fillStyle= c2;
	context.font= "16px Helvetica";
	context.fillText("COM1003",220,15); 
	context.rect(50,250,10,40); //Mon
	context.rect(95,214,10,76); //Tue
	context.rect(135,250,10,40); //Wed 
	context.rect(175,124,10,166); //Thur 
	context.rect(215,40,10,250); //Fri 
	context.rect(255,214,10,76); //Sat 
	context.rect(295,250,10,40); //Sun 
	context.fill();
	context.beginPath()
	//Bars for com1008
	context.fillStyle= c3;
	context.font= "16px Helvetica";
	context.fillText("COM1008",130,15); 
	context.rect(60,214,10,76); //Mon
	context.rect(105,214,10,76);//Tue 
	context.rect(145,124,10,166) //Wed; 
	context.rect(185,214,10,76); //Thur 
	context.rect(225,250,10,40); //Fri 
	context.rect(265,214,10,76); //Sat 
	context.rect(305,250,10,40); //Sun 
	context.fill();
	// Fills in labels x and y axis
	context.beginPath();
	context.fillStyle=c4
	context.font= "20px Arial";
	context.fillText("Day of the Week",100,340);
	context.font= "12px Arial";
	context.fillText("Sun",295,310);
	context.fillText("Sat",255,310);
	context.fillText("Fri",215,310);
	context.fillText("Thurs",165,310);
	context.fillText("Wed",125,310);
	context.fillText("Tue",85,310);
	context.fillText("Mon",40,310);
	context.rotate((90*Math.PI)/180);
	context.font= "20px Arial";
	context.fillText("Hours Spent", 110,-10);
	context.rotate((270*Math.PI)/180);
	context.fillText("1", 340,220);
	context.fillText("2", 340,135);
	context.fillText("3", 340,55);


	
	context.beginPath();
	context.moveTo(30,(height/3)+40);
	context.lineTo(330,(height/3)+40);
	context.stroke();
	context.moveTo(30,(height/3)+130);
	context.lineTo(330,(height/3)+130);
	context.stroke();
		
}


function piechart(c1,c2,c3) { // Draws the pie chart
	var canvas = document.getElementById("graph");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,600,400);
	context.lineWidth=3;
	context.beginPath();
	context.arc(170,175,150,0,Math.PI*2);
	context.stroke();
	context.fillStyle=c1 //com1002 pie slice
	context.beginPath();
	context.moveTo(175,175);
	context.arc(170,175,150,0,140*Math.PI/180);
	context.closePath();
	context.fill();
	context.fillStyle=c2 // com1003 pie slice
	context.beginPath();
	context.moveTo(175,175);
	context.arc(170,175,150,140*Math.PI/180,240*Math.PI/180);
	context.closePath();
	context.fill();	
	context.fillStyle=c3 // com1008 pie slice
	context.beginPath();
	context.moveTo(175,175);
	context.arc(170,175,150,240*Math.PI/180,360*Math.PI/180);
	context.closePath();
	context.fill();
	context.fillStyle=c1;	
	context.font= "16px Helvetica";
	context.fillText("COM1002 (37%)",250,320);	
	context.fillStyle= c2;
	context.font= "16px Helvetica";
	context.fillText("COM1003(33%)",0,300); 
	context.fillStyle= c3;
	context.font= "16px Helvetica";
	context.fillText("COM1008(30%)",180,15); 
}

// Draws a spider chart
function spider(c1,c2,c3,c4){ 
	var canvas = document.getElementById("graph");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,600,400);
	context.fillStyle=c1;	
	context.font= "16px Helvetica";
	context.fillText("COM1002 (37%)",250,320);	
	context.fillStyle= c2;
	context.font= "16px Helvetica";
	context.fillText("COM1003(33%)",0,320); 
	context.fillStyle= c3;
	context.font= "16px Helvetica";
	context.fillText("COM1008(30%)",130,15); 
	context.beginPath();
	context.lineWidth=2;
	context.globalAlpha = 0.55 // Sets the transparency
	context.beginPath();
	context.moveTo(50, 240);
	context.lineTo(325, 280);
	context.lineTo(180, 40);
	context.fillStyle= c4;
	context.closePath();
	context.stroke();
	context.fill();
	context.globalAlpha = 1; // Transparency back to 1 so it does not carry over to other illustrations in JavaScript
}

	
	
barchart("rgb(0,0,250)","rgb(0,250,0)","rgb(250,0,0)","rgb(0,0,0")




	