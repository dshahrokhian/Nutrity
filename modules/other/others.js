function displayOthers(year,country){
  
  var title = d3.select("#mainSVG").append("g").attr("transform", "translate(300,30)");	
	
                                 
  var text1 = title.append("text")
        .text(country + ", year "+year)
        .style("font-weight", "bold")
        .attr("font-size", 35 + "px")
        .style("fill", "blue")
        .attr("x","50");
        
  var wordcloudDesc = d3.select("#mainSVG").append("g").attr("transform", "translate(30,390)");	
	
                                 
  var text1 = wordcloudDesc.append("text")
        .text("(Food with highest consumption)")
        .attr('font-style', 'italic')
        .attr("font-size", 15 + "px")
        .style("fill", "blue")
        .attr("x","50");
 
  
}
