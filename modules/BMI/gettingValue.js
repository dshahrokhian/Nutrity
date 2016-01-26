function getValueFemale(year,country){


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
  
  if(typeof BMIfemale === 'undefined'){
  loadLiquidFillGaugeFe("fillgauge1", "0", config3);
  }
  else {
  loadLiquidFillGaugeFe("fillgauge1", BMIfemale, config3);}
  }); 
  
}



function getValueMale(year,country){
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
  
  if(typeof BMImale === 'undefined'){
  loadLiquidFillGauge("fillgauge2", 0, config1);
  }
  else {
  loadLiquidFillGauge("fillgauge2", BMImale, config1);}
  });
  
  return BMImale;
}