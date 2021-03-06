function wordCloud(year,country){


 var filteredData;

//Loading data
d3.csv("foodPerCountry_MOD.csv", function(data) {
  data.forEach(function(d) {
    //d.Y2010 = +d.Y2010;
    d[year] = +d[year]
    });
    
//Filtering data
         
    filteredData = data.filter(function(d) { 
        if( d["Element"] == "Food supply quantity (kg/capita/yr)" && d["Country"] == country)
        { 
  			return data.sort(function(d) { return d3.descending(d[year]);  });;
        } 
    });
 
//Keeping only the 50 highest food (values)    
    filteredData=filteredData.slice(0,50)
    
 //Getting the max and scaling data    
    var max = d3.max(filteredData, function(d) { return +d[year];} );
    var scaled = d3.scale.linear().domain([0,max]).range([0, 26]);
       
       
   filteredData.forEach(function(d) { 
           d[year] = scaled(+d[year]);
      
    });   
    
    
  console.log(max);
  console.log(scaled(max));    
  console.log(filteredData[0]);
  
update(max);

/*window.onresize = function(event) {
    update();
};*/
  
});



var fill = d3.scale.category20b();

var w = 400,
        h = 300;

var max,
        fontSize;


var layout = d3.layout.cloud()
        .timeInterval(Infinity)
        .size([w, h])
        .fontSize(function(d) {
            return fontSize(+d[year]);
        })
        .text(function(d) {
            return d.Item;
        })
        .on("end", draw);

/*var svg = d3.select("#mainSVG").append("svg")
        .attr("width", w)
        .attr("height", h);*/
var svg = d3.select("#mainSVG").append("g").attr("transform", "translate(-5,50)");        
        
var svgContainer = svg.append("svg")
                                    .attr("width", 400)
                                    .attr("height", 300);

var vis = svgContainer.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");



function draw(data, bounds) {
    var w = 400,
        h = 300;

    svg.attr("width", w).attr("height", h);

    scale = bounds ? Math.min(
            w / Math.abs(bounds[1].x - w / 2),
            w / Math.abs(bounds[0].x - w / 2),
            h / Math.abs(bounds[1].y - h / 2),
            h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

    var text = vis.selectAll("text")
            .data(data, function(d) {
                return d.text.toLowerCase();
            });
    text.transition()
            .duration(1000)
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .style("font-size", function(d) {
                return d.size + "px";
            });
    text.enter().append("text")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .style("font-size", function(d) {
                return d.size + "px";
            })
            .style("opacity", 1e-6)
            .transition()
            .duration(1000)
            .style("opacity", 1);
    text.style("font-family", function(d) {
        return d.font;
    })
            .style("fill", function(d) {
                return fill(d.text.toLowerCase());
            })
            .text(function(d) {
                return d.text;
            });

    vis.transition().attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
}


function update(max) {
    layout.font('impact').spiral('archimedean');
    fontSize = d3.scale['sqrt']().range([8, 25]);
    console.log(filteredData);
    if (typeof max === 'undefined' || max === 0) {
    //if (filteredData.lenght==0) {
    	console.log("No data for wordcloud");
	 var text2 = vis.append("svg:text")
    .attr("x", -100)
	 .attr("y", 50)
    .attr("font-size", "35")
    .attr("font-weight", "bold")
    .attr("fill", "red")
    .text("No Data");    
    }
    else {if (filteredData.length){
        fontSize.domain([+filteredData[filteredData.length - 1][year] || 1, +filteredData[0][year]]);
    }
    layout.stop().words(filteredData).start();}
    
}

}