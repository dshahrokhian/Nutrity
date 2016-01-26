function getValue(year,country){


//Loading data
d3.csv("foodPerCountry_MOD.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if(d["Country"] == country && d["Item"] == "Alcoholic Beverages" )
        { 
        return d[year];
  		  } 
    });
  
  var alcohol = d3.max(filteredData, function(d) { return +d[year];} );
  
  if(typeof alcohol === 'undefined'){
  loadLiquidFillGaugeAlc("fillgauge5", "0", config6);
  }
  else {
  loadLiquidFillGaugeAlc("fillgauge5", alcohol, config6);}
  });   
  
 
  
}