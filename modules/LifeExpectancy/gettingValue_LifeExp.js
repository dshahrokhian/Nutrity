function getValueLEFemale(year,country){


var BMIfemale;

//Loading data
d3.csv("HNP_Data_LifeExpectancy.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Indicator Code"] == "SP.DYN.LE00.FE.IN" )
        { 
        return d[year];
  		  } 
    });
  
  var LEfem = d3.max(filteredData, function(d) { return +d[year];} );
  if(typeof LEfem === 'undefined'){
  displayLEfemale("No data");
  }
  else {
  displayLEfemale(LEfem);}
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
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Indicator Code"] == "SP.DYN.LE00.MA.IN" )
        { 
        return d[year];
        } 
    });
   var LEmal = d3.max(filteredData, function(d) { return +d[year];} );
   if(typeof LEmal === 'undefined'){
  displayLEmale("No data");
  }
  else {
  displayLEmale(LEmal);}
  });
  
}

function displayLEfemale(LEfemale){
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 300)
                                    .attr("height", 200);
       
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 150)
                                  .attr("cy", 50)
                                  .attr("r", 50)
                                  .style("fill", "purple");       
               
var textLE = svgContainer.append("svg:text")
    .attr("x", 120)
	 .attr("y", 60)
    .attr("font-size", "25")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text(LEfemale); 
    
var textLE2 = svgContainer.append("svg:text")
    .attr("x", 30)
	 .attr("y", 120)
    .attr("font-size", "15")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .text("Life Expectancy (female)"); 
}

function displayLEmale(LEmale){
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 300)
                                    .attr("height",200);
                
var circleSelection = svgContainer.append("circle")
                                  .attr("cx", 150)
                                  .attr("cy", 50)
                                  .attr("r", 50)
                                  .style("fill", "purple");                
                
var textLE = svgContainer.append("svg:text")
    .attr("x", 120)
	 .attr("y", 60)
    .attr("font-size", "25")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text(LEmale); 
    
    var textLE2 = svgContainer.append("svg:text")
    .attr("x", 30)
	 .attr("y", 120)
    .attr("font-size", "15")
    .attr("font-weight", "bold")
    .attr("fill", "purple")
    .text("Life Expectancy (male)"); 
}