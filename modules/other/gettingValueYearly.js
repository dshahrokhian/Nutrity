var SVGwidth = 1020;
var SVGheight = 450;

//yearly Alcohol consumption
function getValueYearlyAlc(year, callback){

 var filteredYear;

 d3.csv("foodPerCountry_MOD.csv", function(data) {

  data.forEach(function(d) {
    d[year] = +d[year]
});

  filteredYear = data.filter(function(d) { 
    if(d[year]  && d["Item"] == "Alcoholic Beverages")
    { 
        return +d[year];
    } 
});

  var max = d3.max(filteredYear, function(d) { return +d[year];} );

  var gradientColors = d3.scale.linear().domain([0,max]).range(["#cde5fe","#01264b"]);

  filteredYear.forEach(function(d) { 
   d[year] = gradientColors(d[year]);

});

  var map = generateMap(filteredYear, year) 
  callback(map);
}); 
}

//yearly Life Exp female data
function getYearlyValueLEFemale(year, callback){

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

  var max = d3.max(filteredYear, function(d) { return +d[year];} );

  var gradientColors = d3.scale.linear().domain([0,max]).range(["#ffffff","#01264b"]);

  filteredYear.forEach(function(d) { 
   d[year] = gradientColors(d[year]);

});

  var map = generateMap(filteredYear, year) 
  callback(map);    
});
}

 //yearly Life Exp male data
 function getYearlyValueLEMale(year, callback){

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

  var max = d3.max(filteredYear, function(d) { return +d[year];} );
  console.log("max: " + max)
  var gradientColors = d3.scale.linear().domain([0,max]).range(["#ffffff","#01264b"]);

  filteredYear.forEach(function(d) { 
   d[year] = gradientColors(d[year]);

});

  var map = generateMap(filteredYear, year) 
  callback(map);   
});
}

 //yearly BMI female 
 function getYearlyBMIValueFemale(year, callback){
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

    var max = d3.max(filteredYear, function(d) { return +d[year];} );
  console.log("max: " + max)
  var gradientColors = d3.scale.linear().domain([0,max]).range(["#ffffff","#01264b"]);

  filteredYear.forEach(function(d) { 
   d[year] = gradientColors(d[year]);

});
    var map = generateMap(filteredYear, year) 
    callback(map);
});

}

 //yearly BMI male 
 function getYearlyBMIValueMale(year, callback){

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

    var max = d3.max(filteredYear, function(d) { return +d[year];} );

    var gradientColors = d3.scale.linear().domain([0,max]).range(["#ffffff","#01264b"]);

    filteredYear.forEach(function(d) { 
    d[year] = gradientColors(d[year]);

});
    var map = generateMap(filteredYear, year) 
    callback(map);

});

}

function generateMap(filteredYear, year) {

    var map = new Datamap({
      element: document.getElementById("container"),
      projection: 'mercator',
      fills: {
        //UNCOMMENT AFTER DEBUGGING defaultFill: "#cde5fe",
        ARB : getColor(filteredYear, "Arab World", year),
        CSS : getColor(filteredYear, "Caribbean small states", year),
        CEB : getColor(filteredYear, "Central Europe and the Baltics", year),
        EAS : getColor(filteredYear, "East Asia & Pacific (all income levels)", year),
        EAP : getColor(filteredYear, "East Asia & Pacific (developing only)", year),
        EMU : getColor(filteredYear, "Euro area", year),
        ECS : getColor(filteredYear, "Europe & Central Asia (all income levels)", year),
        ECA : getColor(filteredYear, "Europe & Central Asia (developing only)", year),
        EUU : getColor(filteredYear, "European Union", year),
        FCS : getColor(filteredYear, "Fragile and conflict affected situations", year),
        HPC : getColor(filteredYear, "Heavily indebted poor countries (HIPC)", year),
        HIC : getColor(filteredYear, "High income", year),
        NOC : getColor(filteredYear, "High income: nonOECD", year),
        OEC : getColor(filteredYear, "High income: OECD", year),
        LCN : getColor(filteredYear, "Latin America & Caribbean (all income levels)", year),
        LAC : getColor(filteredYear, "Latin America & Caribbean (developing only)", year),
        LDC : getColor(filteredYear, "Least developed countries: UN classification", year),
        LMY : getColor(filteredYear, "Low & middle income", year),
        LIC : getColor(filteredYear, "Low income", year),
        LMC : getColor(filteredYear, "Lower middle income", year),
        MEA : getColor(filteredYear, "Middle East & North Africa (all income levels)", year),
        MNA : getColor(filteredYear, "Middle East & North Africa (developing only)", year),
        MIC : getColor(filteredYear, "Middle income", year),
        NAC : getColor(filteredYear, "North America", year),
        OED : getColor(filteredYear, "OECD members", year),
        OSS : getColor(filteredYear, "Other small states", year),
        PSS : getColor(filteredYear, "Pacific island small states", year),
        SST : getColor(filteredYear, "Small states", year),
        SAS : getColor(filteredYear, "South Asia", year),
        SSF : getColor(filteredYear, "Sub-Saharan Africa (all income levels)", year),
        SSA : getColor(filteredYear, "Sub-Saharan Africa (developing only)", year),
        UMC : getColor(filteredYear, "Upper middle income", year),
        WLD : getColor(filteredYear, "World", year),
        AFG : getColor(filteredYear, "Afghanistan", year),
        ALB : getColor(filteredYear, "Albania", year),
        DZA : getColor(filteredYear, "Algeria", year),
        ASM : getColor(filteredYear, "American Samoa", year),
        ADO : getColor(filteredYear, "Andorra", year),
        AGO : getColor(filteredYear, "Angola", year),
        ATG : getColor(filteredYear, "Antigua and Barbuda", year),
        ARG : getColor(filteredYear, "Argentina", year),
        ARM : getColor(filteredYear, "Armenia", year),
        ABW : getColor(filteredYear, "Aruba", year),
        AUS : getColor(filteredYear, "Australia", year),
        AUT : getColor(filteredYear, "Austria", year),
        AZE : getColor(filteredYear, "Azerbaijan", year),
        BHS : getColor(filteredYear, "Bahamas, The", year),
        BHR : getColor(filteredYear, "Bahrain", year),
        BGD : getColor(filteredYear, "Bangladesh", year),
        BRB : getColor(filteredYear, "Barbados", year),
        BLR : getColor(filteredYear, "Belarus", year),
        BEL : getColor(filteredYear, "Belgium", year),
        BLZ : getColor(filteredYear, "Belize", year),
        BEN : getColor(filteredYear, "Benin", year),
        BMU : getColor(filteredYear, "Bermuda", year),
        BTN : getColor(filteredYear, "Bhutan", year),
        BOL : getColor(filteredYear, "Bolivia", year),
        BIH : getColor(filteredYear, "Bosnia and Herzegovina", year),
        BWA : getColor(filteredYear, "Botswana", year),
        BRA : getColor(filteredYear, "Brazil", year),
        BRN : getColor(filteredYear, "Brunei Darussalam", year),
        BGR : getColor(filteredYear, "Bulgaria", year),
        BFA : getColor(filteredYear, "Burkina Faso", year),
        BDI : getColor(filteredYear, "Burundi", year),
        CPV : getColor(filteredYear, "Cabo Verde", year),
        KHM : getColor(filteredYear, "Cambodia", year),
        CMR : getColor(filteredYear, "Cameroon", year),
        CAN : getColor(filteredYear, "Canada", year),
        CYM : getColor(filteredYear, "Cayman Islands", year),
        CAF : getColor(filteredYear, "Central African Republic", year),
        TCD : getColor(filteredYear, "Chad", year),
        CHI : getColor(filteredYear, "Channel Islands", year),
        CHL : getColor(filteredYear, "Chile", year),
        CHN : getColor(filteredYear, "China", year),
        COL : getColor(filteredYear, "Colombia", year),
        COM : getColor(filteredYear, "Comoros", year),
        COD : getColor(filteredYear, "Democratic Republic of the Congo", year),
        COG : getColor(filteredYear, "Republic of the Congo", year),
        CRI : getColor(filteredYear, "Costa Rica", year),
        CIV : getColor(filteredYear, "Ivory Coast", year),
        HRV : getColor(filteredYear, "Croatia", year),
        CUB : getColor(filteredYear, "Cuba", year),
        CUW : getColor(filteredYear, "Curacao", year),
        CYP : getColor(filteredYear, "Cyprus", year),
        CZE : getColor(filteredYear, "Czech Republic", year),
        DNK : getColor(filteredYear, "Denmark", year),
        DJI : getColor(filteredYear, "Djibouti", year),
        DMA : getColor(filteredYear, "Dominica", year),
        DOM : getColor(filteredYear, "Dominican Republic", year),
        ECU : getColor(filteredYear, "Ecuador", year),
        EGY : getColor(filteredYear, "Egypt", year),
        SLV : getColor(filteredYear, "El Salvador", year),
        GNQ : getColor(filteredYear, "Equatorial Guinea", year),
        ERI : getColor(filteredYear, "Eritrea", year),
        EST : getColor(filteredYear, "Estonia", year),
        ETH : getColor(filteredYear, "Ethiopia", year),
        FRO : getColor(filteredYear, "Faeroe Islands", year),
        FJI : getColor(filteredYear, "Fiji", year),
        FIN : getColor(filteredYear, "Finland", year),
        FRA : getColor(filteredYear, "France", year),
        PYF : getColor(filteredYear, "French Polynesia", year),
        GAB : getColor(filteredYear, "Gabon", year),
        GMB : getColor(filteredYear, "Gambia, The", year),
        GEO : getColor(filteredYear, "Georgia", year),
        DEU : getColor(filteredYear, "Germany", year),
        GHA : getColor(filteredYear, "Ghana", year),
        GRC : getColor(filteredYear, "Greece", year),
        GRL : getColor(filteredYear, "Greenland", year),
        GRD : getColor(filteredYear, "Grenada", year),
        GUM : getColor(filteredYear, "Guam", year),
        GTM : getColor(filteredYear, "Guatemala", year),
        GIN : getColor(filteredYear, "Guinea", year),
        GNB : getColor(filteredYear, "Guinea-Bissau", year),
        GUY : getColor(filteredYear, "French Guiana", year),
        HTI : getColor(filteredYear, "Haiti", year),
        HND : getColor(filteredYear, "Honduras", year),
        HKG : getColor(filteredYear, "Hong Kong SAR, China", year),
        HUN : getColor(filteredYear, "Hungary", year),
        ISL : getColor(filteredYear, "Greenland", year),
        IND : getColor(filteredYear, "India", year),
        IDN : getColor(filteredYear, "Indonesia", year),
        IRN : getColor(filteredYear, "Iran", year),
        IRQ : getColor(filteredYear, "Iraq", year),
        IRL : getColor(filteredYear, "Ireland", year),
        IMY : getColor(filteredYear, "Isle of Man", year),
        ISR : getColor(filteredYear, "Israel", year),
        ITA : getColor(filteredYear, "Italy", year),
        JAM : getColor(filteredYear, "Jamaica", year),
        JPN : getColor(filteredYear, "Japan", year),
        JOR : getColor(filteredYear, "Jordan", year),
        KAZ : getColor(filteredYear, "Kazakhstan", year),
        KEN : getColor(filteredYear, "Kenya", year),
        KIR : getColor(filteredYear, "Kiribati", year),
        PRK : getColor(filteredYear, "North Korea", year),
        KOR : getColor(filteredYear, "South Korea", year),
        KSV : getColor(filteredYear, "Kosovo", year),
        KWT : getColor(filteredYear, "Kuwait", year),
        KGZ : getColor(filteredYear, "Kyrgyzstan", year),
        LAO : getColor(filteredYear, "Laos", year),
        LVA : getColor(filteredYear, "Latvia", year),
        LBN : getColor(filteredYear, "Lebanon", year),
        LSO : getColor(filteredYear, "Lesotho", year),
        LBR : getColor(filteredYear, "Liberia", year),
        LBY : getColor(filteredYear, "Libya", year),
        LIE : getColor(filteredYear, "Liechtenstein", year),
        LTU : getColor(filteredYear, "Lithuania", year),
        LUX : getColor(filteredYear, "Luxembourg", year),
        MAC : getColor(filteredYear, "Macao SAR, China", year),
        MKD : getColor(filteredYear, "Macedonia", year),
        MDG : getColor(filteredYear, "Madagascar", year),
        MWI : getColor(filteredYear, "Malawi", year),
        MYS : getColor(filteredYear, "Malaysia", year),
        MDV : getColor(filteredYear, "Maldives", year),
        MLI : getColor(filteredYear, "Mali", year),
        MLT : getColor(filteredYear, "Malta", year),
        MHL : getColor(filteredYear, "Marshall Islands", year),
        MRT : getColor(filteredYear, "Mauritania", year),
        MUS : getColor(filteredYear, "Mauritius", year),
        MEX : getColor(filteredYear, "Mexico", year),
        FSM : getColor(filteredYear, "Micronesia, Fed. Sts.", year),
        MDA : getColor(filteredYear, "Moldova", year),
        MCO : getColor(filteredYear, "Monaco", year),
        MNG : getColor(filteredYear, "Mongolia", year),
        MNE : getColor(filteredYear, "Montenegro", year),
        MAR : getColor(filteredYear, "Morocco", year),
        MOZ : getColor(filteredYear, "Mozambique", year),
        MMR : getColor(filteredYear, "Myanmar", year),
        NAM : getColor(filteredYear, "Namibia", year),
        NPL : getColor(filteredYear, "Nepal", year),
        NLD : getColor(filteredYear, "Netherlands", year),
        NCL : getColor(filteredYear, "New Caledonia", year),
        NZL : getColor(filteredYear, "New Zealand", year),
        NIC : getColor(filteredYear, "Nicaragua", year),
        NER : getColor(filteredYear, "Niger", year),
        NGA : getColor(filteredYear, "Nigeria", year),
        MNP : getColor(filteredYear, "Northern Mariana Islands", year),
        NOR : getColor(filteredYear, "Norway", year),
        OMN : getColor(filteredYear, "Oman", year),
        PAK : getColor(filteredYear, "Pakistan", year),
        PLW : getColor(filteredYear, "Palau", year),
        PAN : getColor(filteredYear, "Panama", year),
        PNG : getColor(filteredYear, "Papua New Guinea", year),
        PRY : getColor(filteredYear, "Paraguay", year),
        PER : getColor(filteredYear, "Peru", year),
        PHL : getColor(filteredYear, "Philippines", year),
        POL : getColor(filteredYear, "Poland", year),
        PRT : getColor(filteredYear, "Portugal", year),
        PRI : getColor(filteredYear, "Puerto Rico", year),
        QAT : getColor(filteredYear, "Qatar", year),
        ROU : getColor(filteredYear, "Romania", year),
        RUS : getColor(filteredYear, "Russia", year),
        RWA : getColor(filteredYear, "Rwanda", year),
        WSM : getColor(filteredYear, "Samoa", year),
        SMR : getColor(filteredYear, "San Marino", year),
        STP : getColor(filteredYear, "Sao Tome and Principe", year),
        SAU : getColor(filteredYear, "Saudi Arabia", year),
        SEN : getColor(filteredYear, "Senegal", year),
        SRB : getColor(filteredYear, "Republic of Serbia", year),
        SYC : getColor(filteredYear, "Seychelles", year),
        SLE : getColor(filteredYear, "Sierra Leone", year),
        SGP : getColor(filteredYear, "Singapore", year),
        SXM : getColor(filteredYear, "Sint Maarten (Dutch part)", year),
        SVK : getColor(filteredYear, "Slovakia", year),
        SVN : getColor(filteredYear, "Slovenia", year),
        SLB : getColor(filteredYear, "Solomon Islands", year),
        SOM : getColor(filteredYear, "Somalia", year),
        ZAF : getColor(filteredYear, "South Africa", year),
        SSD : getColor(filteredYear, "South Sudan", year),
        ESP : getColor(filteredYear, "Spain", year),
        LKA : getColor(filteredYear, "Sri Lanka", year),
        KNA : getColor(filteredYear, "St. Kitts and Nevis", year),
        LCA : getColor(filteredYear, "St. Lucia", year),
        MAF : getColor(filteredYear, "St. Martin (French part)", year),
        VCT : getColor(filteredYear, "St. Vincent and the Grenadines", year),
        SDN : getColor(filteredYear, "Sudan", year),
        SUR : getColor(filteredYear, "Suriname", year),
        SWZ : getColor(filteredYear, "Swaziland", year),
        SWE : getColor(filteredYear, "Sweden", year),
        CHE : getColor(filteredYear, "Switzerland", year),
        SYR : getColor(filteredYear, "Syria", year),
        TJK : getColor(filteredYear, "Tajikistan", year),
        TZA : getColor(filteredYear, "United Republic of Tanzania", year),
        THA : getColor(filteredYear, "Thailand", year),
        TMP : getColor(filteredYear, "Timor-Leste", year),
        TGO : getColor(filteredYear, "Togo", year),
        TON : getColor(filteredYear, "Tonga", year),
        TTO : getColor(filteredYear, "Trinidad and Tobago", year),
        TUN : getColor(filteredYear, "Tunisia", year),
        TUR : getColor(filteredYear, "Turkey", year),
        TKM : getColor(filteredYear, "Turkmenistan", year),
        TCA : getColor(filteredYear, "Turks and Caicos Islands", year),
        TUV : getColor(filteredYear, "Tuvalu", year),
        UGA : getColor(filteredYear, "Uganda", year),
        UKR : getColor(filteredYear, "Ukraine", year),
        ARE : getColor(filteredYear, "United Arab Emirates", year),
        GBR : getColor(filteredYear, "United Kingdom", year),
        USA : getColor(filteredYear, "United States of America", year),
        URY : getColor(filteredYear, "Uruguay", year),
        UZB : getColor(filteredYear, "Uzbekistan", year),
        VUT : getColor(filteredYear, "Vanuatu", year),
        VEN : getColor(filteredYear, "Venezuela", year),
        VNM : getColor(filteredYear, "Vietnam", year),
        VIR : getColor(filteredYear, "Virgin Islands (U.S.)", year),
        WBG : getColor(filteredYear, "West Bank and Gaza", year),
        YEM : getColor(filteredYear, "Yemen", year),
        ZMB : getColor(filteredYear, "Zambia", year),
        KOS : getColor(filteredYear, "Kosovo", year),
        ZWE : getColor(filteredYear, "Zimbabwe", year)
    },
    data: {
        ARB : { fillKey: "ARB" },
        KOS : { fillKey: "KOS" },
        CSS : { fillKey: "CSS" },
        CEB : { fillKey: "CEB" },
        EAS : { fillKey: "EAS" },
        EAP : { fillKey: "EAP" },
        EMU : { fillKey: "EMU" },
        ECS : { fillKey: "ECS" },
        ECA : { fillKey: "ECA" },
        EUU : { fillKey: "EUU" },
        FCS : { fillKey: "FCS" },
        HPC : { fillKey: "HPC" },
        HIC : { fillKey: "HIC" },
        NOC : { fillKey: "NOC" },
        OEC : { fillKey: "OEC" },
        LCN : { fillKey: "LCN" },
        LAC : { fillKey: "LAC" },
        LDC : { fillKey: "LDC" },
        LMY : { fillKey: "LMY" },
        LIC : { fillKey: "LIC" },
        LMC : { fillKey: "LMC" },
        MEA : { fillKey: "MEA" },
        MNA : { fillKey: "MNA" },
        MIC : { fillKey: "MIC" },
        NAC : { fillKey: "NAC" },
        OED : { fillKey: "OED" },
        OSS : { fillKey: "OSS" },
        PSS : { fillKey: "PSS" },
        SST : { fillKey: "SST" },
        SAS : { fillKey: "SAS" },
        SSF : { fillKey: "SSF" },
        SSA : { fillKey: "SSA" },
        UMC : { fillKey: "UMC" },
        WLD : { fillKey: "WLD" },
        AFG : { fillKey: "AFG" },
        ALB : { fillKey: "ALB" },
        DZA : { fillKey: "DZA" },
        ASM : { fillKey: "ASM" },
        ADO : { fillKey: "ADO" },
        AGO : { fillKey: "AGO" },
        ATG : { fillKey: "ATG" },
        ARG : { fillKey: "ARG" },
        ARM : { fillKey: "ARM" },
        ABW : { fillKey: "ABW" },
        AUS : { fillKey: "AUS" },
        AUT : { fillKey: "AUT" },
        AZE : { fillKey: "AZE" },
        BHS : { fillKey: "BHS" },
        BHR : { fillKey: "BHR" },
        BGD : { fillKey: "BGD" },
        BRB : { fillKey: "BRB" },
        BLR : { fillKey: "BLR" },
        BEL : { fillKey: "BEL" },
        BLZ : { fillKey: "BLZ" },
        BEN : { fillKey: "BEN" },
        BMU : { fillKey: "BMU" },
        BTN : { fillKey: "BTN" },
        BOL : { fillKey: "BOL" },
        BIH : { fillKey: "BIH" },
        BWA : { fillKey: "BWA" },
        BRA : { fillKey: "BRA" },
        BRN : { fillKey: "BRN" },
        BGR : { fillKey: "BGR" },
        BFA : { fillKey: "BFA" },
        BDI : { fillKey: "BDI" },
        CPV : { fillKey: "CPV" },
        KHM : { fillKey: "KHM" },
        CMR : { fillKey: "CMR" },
        CAN : { fillKey: "CAN" },
        CYM : { fillKey: "CYM" },
        CAF : { fillKey: "CAF" },
        TCD : { fillKey: "TCD" },
        CHI : { fillKey: "CHI" },
        CHL : { fillKey: "CHL" },
        CHN : { fillKey: "CHN" },
        COL : { fillKey: "COL" },
        COM : { fillKey: "COM" },
        COD : { fillKey: "COD" },
        COG : { fillKey: "COG" },
        CRI : { fillKey: "CRI" },
        CIV : { fillKey: "CIV" },
        HRV : { fillKey: "HRV" },
        CUB : { fillKey: "CUB" },
        CUW : { fillKey: "CUW" },
        CYP : { fillKey: "CYP" },
        CZE : { fillKey: "CZE" },
        DNK : { fillKey: "DNK" },
        DJI : { fillKey: "DJI" },
        DMA : { fillKey: "DMA" },
        DOM : { fillKey: "DOM" },
        ECU : { fillKey: "ECU" },
        EGY : { fillKey: "EGY" },
        SLV : { fillKey: "SLV" },
        GNQ : { fillKey: "GNQ" },
        ERI : { fillKey: "ERI" },
        EST : { fillKey: "EST" },
        ETH : { fillKey: "ETH" },
        FRO : { fillKey: "FRO" },
        FJI : { fillKey: "FJI" },
        FIN : { fillKey: "FIN" },
        FRA : { fillKey: "FRA" },
        PYF : { fillKey: "PYF" },
        GAB : { fillKey: "GAB" },
        GMB : { fillKey: "GMB" },
        GEO : { fillKey: "GEO" },
        DEU : { fillKey: "DEU" },
        GHA : { fillKey: "GHA" },
        GRC : { fillKey: "GRC" },
        GRL : { fillKey: "GRL" },
        GRD : { fillKey: "GRD" },
        GUM : { fillKey: "GUM" },
        GTM : { fillKey: "GTM" },
        GIN : { fillKey: "GIN" },
        GNB : { fillKey: "GNB" },
        GUY : { fillKey: "GUY" },
        HTI : { fillKey: "HTI" },
        HND : { fillKey: "HND" },
        HKG : { fillKey: "HKG" },
        HUN : { fillKey: "HUN" },
        ISL : { fillKey: "ISL" },
        IND : { fillKey: "IND" },
        IDN : { fillKey: "IDN" },
        IRN : { fillKey: "IRN" },
        IRQ : { fillKey: "IRQ" },
        IRL : { fillKey: "IRL" },
        IMY : { fillKey: "IMY" },
        ISR : { fillKey: "ISR" },
        ITA : { fillKey: "ITA" },
        JAM : { fillKey: "JAM" },
        JPN : { fillKey: "JPN" },
        JOR : { fillKey: "JOR" },
        KAZ : { fillKey: "KAZ" },
        KEN : { fillKey: "KEN" },
        KIR : { fillKey: "KIR" },
        PRK : { fillKey: "PRK" },
        KOR : { fillKey: "KOR" },
        KSV : { fillKey: "KSV" },
        KWT : { fillKey: "KWT" },
        KGZ : { fillKey: "KGZ" },
        LAO : { fillKey: "LAO" },
        LVA : { fillKey: "LVA" },
        LBN : { fillKey: "LBN" },
        LSO : { fillKey: "LSO" },
        LBR : { fillKey: "LBR" },
        LBY : { fillKey: "LBY" },
        LIE : { fillKey: "LIE" },
        LTU : { fillKey: "LTU" },
        LUX : { fillKey: "LUX" },
        MAC : { fillKey: "MAC" },
        MKD : { fillKey: "MKD" },
        MDG : { fillKey: "MDG" },
        MWI : { fillKey: "MWI" },
        MYS : { fillKey: "MYS" },
        MDV : { fillKey: "MDV" },
        MLI : { fillKey: "MLI" },
        MLT : { fillKey: "MLT" },
        MHL : { fillKey: "MHL" },
        MRT : { fillKey: "MRT" },
        MUS : { fillKey: "MUS" },
        MEX : { fillKey: "MEX" },
        FSM : { fillKey: "FSM" },
        MDA : { fillKey: "MDA" },
        MCO : { fillKey: "MCO" },
        MNG : { fillKey: "MNG" },
        MNE : { fillKey: "MNE" },
        MAR : { fillKey: "MAR" },
        MOZ : { fillKey: "MOZ" },
        MMR : { fillKey: "MMR" },
        NAM : { fillKey: "NAM" },
        NPL : { fillKey: "NPL" },
        NLD : { fillKey: "NLD" },
        NCL : { fillKey: "NCL" },
        NZL : { fillKey: "NZL" },
        NIC : { fillKey: "NIC" },
        NER : { fillKey: "NER" },
        NGA : { fillKey: "NGA" },
        MNP : { fillKey: "MNP" },
        NOR : { fillKey: "NOR" },
        OMN : { fillKey: "OMN" },
        PAK : { fillKey: "PAK" },
        PLW : { fillKey: "PLW" },
        PAN : { fillKey: "PAN" },
        PNG : { fillKey: "PNG" },
        PRY : { fillKey: "PRY" },
        PER : { fillKey: "PER" },
        PHL : { fillKey: "PHL" },
        POL : { fillKey: "POL" },
        PRT : { fillKey: "PRT" },
        PRI : { fillKey: "PRI" },
        QAT : { fillKey: "QAT" },
        ROU : { fillKey: "ROU" },
        RUS : { fillKey: "RUS" },
        RWA : { fillKey: "RWA" },
        WSM : { fillKey: "WSM" },
        SMR : { fillKey: "SMR" },
        STP : { fillKey: "STP" },
        SAU : { fillKey: "SAU" },
        SEN : { fillKey: "SEN" },
        SRB : { fillKey: "SRB" },
        SYC : { fillKey: "SYC" },
        SLE : { fillKey: "SLE" },
        SGP : { fillKey: "SGP" },
        SXM : { fillKey: "SXM" },
        SVK : { fillKey: "SVK" },
        SVN : { fillKey: "SVN" },
        SLB : { fillKey: "SLB" },
        SOM : { fillKey: "SOM" },
        ZAF : { fillKey: "ZAF" },
        SSD : { fillKey: "SSD" },
        ESP : { fillKey: "ESP" },
        LKA : { fillKey: "LKA" },
        KNA : { fillKey: "KNA" },
        LCA : { fillKey: "LCA" },
        MAF : { fillKey: "MAF" },
        VCT : { fillKey: "VCT" },
        SDN : { fillKey: "SDN" },
        SUR : { fillKey: "SUR" },
        SWZ : { fillKey: "SWZ" },
        SWE : { fillKey: "SWE" },
        CHE : { fillKey: "CHE" },
        SYR : { fillKey: "SYR" },
        TJK : { fillKey: "TJK" },
        TZA : { fillKey: "TZA" },
        THA : { fillKey: "THA" },
        TMP : { fillKey: "TMP" },
        TGO : { fillKey: "TGO" },
        TON : { fillKey: "TON" },
        TTO : { fillKey: "TTO" },
        TUN : { fillKey: "TUN" },
        TUR : { fillKey: "TUR" },
        TKM : { fillKey: "TKM" },
        TCA : { fillKey: "TCA" },
        TUV : { fillKey: "TUV" },
        UGA : { fillKey: "UGA" },
        UKR : { fillKey: "UKR" },
        ARE : { fillKey: "ARE" },
        GBR : { fillKey: "GBR" },
        USA : { fillKey: "USA" },
        URY : { fillKey: "URY" },
        UZB : { fillKey: "UZB" },
        VUT : { fillKey: "VUT" },
        VEN : { fillKey: "VEN" },
        VNM : { fillKey: "VNM" },
        VIR : { fillKey: "VIR" },
        WBG : { fillKey: "WBG" },
        YEM : { fillKey: "YEM" },
        ZMB : { fillKey: "ZMB" },
        ZWE : { fillKey: "ZWE" }

    },
    geographyConfig: {
        highlightFillColor: '#217ABF',
        highlightBorderColor: '#183B73',
    },
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

          map.selectedCountry(geography.properties.name, year);
      });
    }
}); 

    map.addPlugin('selectedCountry', function(layer, country, year) {

        //Others   
        displayOthers(year,country);   
        
        <!-- Wordcloud-->
        wordCloud(year,country)    
        
        <!--Life expectancy-->
        var LEmale = getValueLEMale(year,country);
        var LEfemale = getValueLEFemale(year,country);
        
        <!--Alcohol consumption-->
        var alcohol = getValue(year,country);
        <!--Body Mass Index-->
        var BMImale = getValueMale(year,country);
        var BMIfemale = getValueFemale(year,country);

    });
}

function getColor(filteredYear, countryString,year){
	
    var colorGrad = d3.max(filteredYear, function (d) {
     if (d["Country"]==countryString) {
        return d[year];
    }
})
    
    return colorGrad;
} 
