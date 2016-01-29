//yearly Alcohol consumption
function getValueYearlyAlc(year){


 var value = d3.csv("foodPerCountry_MOD.csv", function(data) {

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
    var filteredYear = data.filter(function(d) { 
        if(d[year]  && d["Item"] == "Alcoholic Beverages")
        { 
        return +d[year];
        } 
    });
var max = d3.max(filteredYear, function(d) { return +d[year];} );
var gradientColors = d3.scale.linear().domain([0,max]).range(["#EFEFFF","#02386F"]);

    filteredYear.forEach(function(d) { 
           d[year] = gradientColors(+d[year]);
      
    });

return filteredYear;
}); 
   
 return value;
  
}

//yearly Life Exp female data
function getYearlyValueLEFemale(year){

//Loading data
d3.csv("HNP_Data_LifeExpectancy.csv", function(data) {
	
  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
var filteredYear;
    filteredYear = data.filter(function(d) { 
        if(d[year]  && d["Indicator Code"] == "SP.DYN.LE00.FE.IN" )
        { 
        return +d[year];
        } 
    });
   console.log(filteredYear);    
    });
 }
 
 //yearly Life Exp male data
function getYearlyValueLEMale(year){

//Loading data
d3.csv("HNP_Data_LifeExpectancy.csv", function(data) {
	
  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
var filteredYear;
    filteredYear = data.filter(function(d) { 
        if(d[year]  && d["Indicator Code"] == "SP.DYN.LE00.MA.IN" )
        { 
        return +d[year];
        } 
    });
   console.log(filteredYear);    
    });
 }
 
 //yearly BMI female 
 function getYearlyBMIValueFemale(year){
if (year<=2010) {
	year=2010;
}
if (year>=2011 && year <=2014) {
	year=2014;
}

//Loading data
d3.csv("xmart.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
    var filteredYear;
    filteredYear = data.filter(function(d) { 
        if(d[year]  && d["Sex"] == " Female" )
        { 
        return +d[year];
        } 
    });
   console.log(filteredYear); 
  
  });
  
}



 //yearly BMI male 
 function getYearlyBMIValueMale(year){
if (year<=2010) {
	year=2010;
}
if (year>=2011 && year <=2014) {
	year=2014;
}

//Loading data
d3.csv("xmart.csv", function(data) {
	
var filteredData;

  data.forEach(function(d) {
    d[year] = +d[year]
    });
    
    var filteredYear;
    filteredYear = data.filter(function(d) { 
        if(d[year]  && d["Sex"] == " Male" )
        { 
        return +d[year];
        } 
    });
   console.log(filteredYear); 
  
  });
  
}
