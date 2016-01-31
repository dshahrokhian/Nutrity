var config6 = liquidFillGaugeDefaultSettingsAlc();
config6.waveTextColor = "blue";
config6.textVertPosition = -0.3 ;
config6.waveAnimateTime = 1000;


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
  
  var visG = d3.select("#mainSVG").append("g").attr("transform", "translate(390,100)");	
	
  var svgContainer = visG.append("svg")
                                    .attr("width", 200)
                                    .attr("height",200);  
                                    
  var fillGaug=svgContainer.append("svg")
  												.attr("id","fillgauge5")
  												.attr("width", 200)
                                    .attr("height",200);
  
  
  if(typeof alcohol === 'undefined'){
  loadLiquidFillGaugeAlc("fillgauge5", "0", config6);
  }
  else {
  loadLiquidFillGaugeAlc("fillgauge5", alcohol, config6);}
  });   
  
 
  
}
