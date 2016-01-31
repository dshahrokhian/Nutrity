function displayOthers(year,country){

      var svgNS = "http://www.w3.org/2000/svg";

      var  use = document.createElementNS(svgNS, "g");

      use.setAttribute("id", "mainSVG")
      use.setAttribute("width", SVGwidth)
      use.setAttribute("height", SVGheight)
      use.setAttribute("fill", "white")
      use.setAttribute("opacity", "1")
      use.setAttribute("transform", "translate(120,120)")

      document.getElementsByClassName("datamap")[0].appendChild(use)

      d3.xml("images/cross.svg", "image/svg+xml", function(closeSVG) {

        closeSVG.documentElement.setAttribute("fill", "black")
        closeSVG.documentElement.setAttribute("x", SVGwidth-50)
        closeSVG.documentElement.setAttribute("y", 15)
        closeSVG.documentElement.setAttribute("cursor", "pointer")
        closeSVG.documentElement.addEventListener("click",function(evt){
          document.getElementById("mainSVG").remove()
      },
      false)

        document.getElementById("mainSVG").appendChild(closeSVG.documentElement);
    });


  d3.selectAll('#mainSVG').append("rect")
      .attr("width", SVGwidth)
      .attr("height", SVGheight)
      .attr("rx", 20)
      .attr("ry", 20)
      .attr("fill", "#ffffe5")
      .style("stroke", "orange")
      .style("stroke-width", 2)
  
  var title = d3.select("#mainSVG").append("g").attr("transform", "translate(300,30)");	
	
                                 
  var text1 = title.append("text")
        .text(country + " : year " + year)
        .style("font-weight", "bold")
        .attr("font-size", 35 + "px")
        .style("fill", "#1C2F54")
        .style("font-family", "Arial")
        .attr("x",50)
        .attr("y",10);
        
  var wordcloudDesc = d3.select("#mainSVG").append("g").attr("transform", "translate(30,390)");	
	   
  var text1 = wordcloudDesc.append("text")
        .text("(Food with highest consumption)")
        .attr('font-style', 'italic')
        .attr("font-size", 15 + "px")
        .style("fill", "blue")
        .attr("x","50");
 
}
