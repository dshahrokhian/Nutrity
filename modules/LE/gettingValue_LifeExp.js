function getValueLEFemale(year,country){


var BMIfemale;

//Loading data
d3.csv("HNP_Data_LifeExpectancy.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
var filteredAvg;
    filteredAvg = data.filter(function(d) { 
        if(d[year]  && d["Indicator Code"] == "SP.DYN.LE00.FE.IN" )
        { 
        return +d[year];
        } 
    });
   var avg = Math.round(d3.mean(filteredAvg, function(d) { return +d[year];} )*10)/10; 
   //console.log("Average " +avg);    
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Indicator Code"] == "SP.DYN.LE00.FE.IN" )
        { 
        return d[year];
  		  } 
    });
  
  var LEfem = Math.round(d3.max(filteredData, function(d) { return +d[year];} )*10)/10;
  if(typeof LEfem === 'undefined'){
  displayNodataFemale("No data");
  }
  else {
  displayLEfemale(LEfem,avg,year);}
  }); 
  
}



function getValueLEMale(year,country){
var BMImale;

//Loading data
d3.csv("HNP_Data_LifeExpectancy.csv", function(data) {
	
	var filteredData;
  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
    var filteredAvg;
    filteredAvg = data.filter(function(d) { 
        if(d[year]  && d["Indicator Code"] == "SP.DYN.LE00.MA.IN" )
        { 
        return +d[year];
        } 
    });
   var avg = Math.round(d3.mean(filteredAvg, function(d) { return +d[year];} )*10)/10; 
   //console.log("Average " +avg);
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Indicator Code"] == "SP.DYN.LE00.MA.IN" )
        { 
        return d[year];
        } 
    });
   var LEmal = Math.round(d3.max(filteredData, function(d) { return +d[year];} )*10)/10;
   if(typeof LEmal === 'undefined'){
  displayNodataMale("No data");
  }
  else {
  displayLEmale(LEmal,avg,year);}
  });
  
}

function displayLEfemale(LEfemale,avg,year){
	
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(630,300)");		
	
var svgContainer = visG.append("svg")
												.attr("id","LEfemid")
                                    .attr("width", 150)
                                    .attr("height", 120);

                                    
 //$("#LEfemid").css({top: 0, left: 500, position:'absolute'});       
       
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 75)
                                  .attr("cy", 40)
                                  .attr("r", 40)
                                  .style("fill", "purple");       
               
var textLE = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 50)
    .attr("font-size", "25")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("text-anchor","middle")
    .text(LEfemale); 
    
var textLE2 = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 90)
    .attr("font-size", "10.5")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("Life Expectancy (female)"); 
    
var textAVG = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 100)
    .attr("font-size", "10")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("(World average in "+year+" = "+avg+")");
    
}

function displayLEmale(LEmale,avg,year){
	
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(830,300)");	
	
var svgContainer = visG.append("svg")
                                    .attr("width", 150)
                                    .attr("height",120);
                
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 75)
                                  .attr("cy", 40)
                                  .attr("r", 40)
                                  .style("fill", "purple");                
                
var textLE = svgContainer.append("svg:text")
    .attr("x", 75)
	  .attr("y", 50)
    .attr("font-size", "25")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("text-anchor","middle")
    .text(LEmale); 
    
    var textLE2 = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 90)
    .attr("font-size", "10.5")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("Life Expectancy (male)"); 
    
var textAVG = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 100)
    .attr("font-size", "10")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("(World average in "+year+" = "+avg+")");     
    
}

function displayNodataMale(nodata){
	
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(870,300)");	
	
var svgContainer = visG.append("svg")
                                    .attr("width", 150)
                                    .attr("height",100);
                
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 75)
                                  .attr("cy", 40)
                                  .attr("r", 40)
                                  .style("fill", "purple");                
                
var textLE = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 50)
    .attr("font-size", "15")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("text-anchor","middle")
    .text(nodata); 
    
    var textLE2 = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 95)
    .attr("font-size", "10.5")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("Life Expectancy (male)"); 
}

function displayNodataFemale(nodata){
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(630,300)");		
	
var svgContainer = visG.append("svg")
												.attr("id","LEfemid")
                                    .attr("width", 150)
                                    .attr("height", 100);

                                    
 //$("#LEfemid").css({top: 0, left: 500, position:'absolute'});       
       
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 75)
                                  .attr("cy", 40)
                                  .attr("r", 40)
                                  .style("fill", "purple");       
               
var textLE = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 50)
    .attr("font-size", "15")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("text-anchor","middle")
    .text(nodata); 
    
var textLE2 = svgContainer.append("svg:text")
    .attr("x", 75)
	 .attr("y", 95)
    .attr("font-size", "10.5")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .attr("text-anchor","middle")
    .text("Life Expectancy (female)"); 
}