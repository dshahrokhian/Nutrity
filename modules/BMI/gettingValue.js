function getValueFemale(year,country){
if (year<=2010) {
	year=2010;
}
if (year>=2011 && year <=2014) {
	year=2014;
}

var BMIfemale;

//Loading data
d3.csv("xmart.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Sex"] == " Female" )
        { 
        return d[year];
  		  } 
    });
  
  var BMIfemale = d3.max(filteredData, function(d) { return +d[year];} );
  
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(600,70)");	
	
  var svgContainer = visG.append("svg")
                                    .attr("width", 200)
                                    .attr("height",200);  
                                    
  var fillGaugefe=svgContainer.append("svg")
  												.attr("id","fillgauge1")
  												.attr("width", 200)
                                    .attr("height",200); 
  
  if(typeof BMIfemale === 'undefined'){
  loadLiquidFillGaugeFe("fillgauge1", "0", config3);
  }
  else {
  loadLiquidFillGaugeFe("fillgauge1", BMIfemale, config3);}
  }); 
  
}



function getValueMale(year,country){

if (year<=2010) {
	year=2010;
}
if (year>=2011 && year <=2014) {
	year=2014;
}	

var BMImale;

//Loading data
d3.csv("xmart.csv", function(data) {
	
	var filteredData;
  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Sex"] == " Male" )
        { 
        return d[year];
  		  } 
    });
   var BMImale = d3.max(filteredData, function(d) { return +d[year];} );
  
var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(800,70)");	
	
  var svgContainer = visG.append("svg")
                                    .attr("width", 200)
                                    .attr("height",200);  
                                    
  var fillGaugema=svgContainer.append("svg")
  												.attr("id","fillgauge2")
  												.attr("width", 200)
                                    .attr("height",200);
  
  if(typeof BMImale === 'undefined'){
  loadLiquidFillGauge("fillgauge2", 0, config1);
  }
  else {
  loadLiquidFillGauge("fillgauge2", BMImale, config1);}
  });
  
  return BMImale;
}