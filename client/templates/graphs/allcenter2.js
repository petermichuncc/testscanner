
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
Template.allworkcell2.topGenresChart = function() {

    //Here I need to have a server side fxn that  I call that returns
    //the average for permanent and another for temp

  

//based on the count I need to determine which data set to ship over to this graph
//
/*
Basically I will 

*/
//I need to grab a average for every work center
/*
31-67

  "2039","2060","2071","2091","2092","6020","6021","6105","6234","6304",
  "6305","6308","6315","6316","6318","6319","6320","6341","6343","6345",
  "6346","6355","6364","6370","3021","5101","5102","5103","5104","5105",
  "5300","1","2","3","4","5","6","7","8","9",
    "10","11","12","13","14","49"

*/
var both=ReactiveMethod.call('averageallworkcenter')

var wc1=both[0]
var wc2=both[1]
var wc3=both[2]
var wc4=both[3]
var wc5=both[4]
var wc6=both[5]
var wc7=both[6]
var wc8=both[7]
var wc9=both[8]
var wc10=both[9]
var wc11=both[10]
var wc12=both[11]
var wc13=both[12]
var wc14=both[13]
var wc15=both[14]
var wc16=both[15]
var wc17=both[16]
var wc18=both[17]
var wc19=both[18]
var wc20=both[19]
var wc21=both[20]
var wc22=both[21]
var wc23=both[22]
var wc24=both[23]
var wc25=both[24]
var wc26=both[25]
var wc27=both[26]
var wc28=both[27]
var wc29=both[28]
var wc30=both[29]
var wc31=both[30]
var wc32=both[31]
var wc33=both[32]
var wc34=both[33]
var wc35=both[34]
var wc36=both[35]
var wc37=both[36]
var wc38=both[37]
var wc39=both[38]
var wc40=both[39]
var wc41=both[40]
var wc42=both[41]
var wc43=both[42]
var wc44=both[43]
var wc45=both[44]
var wc46=both[45]
var wc47=both[46]
var wc48=both[47]
var wc49=both[48]
var wc50=both[49]
var wc51=both[50]
var wc52=both[51]
var wc53=both[52]
var wc54=both[53]
var wc55=both[54]
var wc56=both[55]
var wc57=both[56]
var wc58=both[57]
var wc59=both[58]
var wc60=both[59]
var wc61=both[60]
var wc62=both[61]
var wc63=both[62]
var wc64=both[63]
var wc65=both[64]
var wc66=both[65]
var wc67=both[66]
var wc68=both[67]
var wc69=both[68]
var wc70=both[69]
var wc71=both[70]
var wc72=both[71]
var wc73=both[72]
var wc74=both[73]
var wc75=both[74]
var wc76=both[75]

console.log("this is typeof wc1 "+ typeof wc1)
if (typeof wc1=="number")
{Session.set("loading",0)
    var datatest=[
                
              ['wc16',   wc16],
              ['wc17',   wc17],
              ['wc18',   wc18],
              ['wc19',   wc19],
              ['wc20',   wc20],
              ['wc21',   wc21],
              ['wc22',   wc22],
              ['wc23',   wc23],
              ['wc24',   wc24],
              ['wc25',   wc25],
              ['wc26',   wc26],
              ['wc27',   wc27],
              ['wc28',   wc28],
              ['wc29',   wc29],
              ['wc30',   wc30],
              ['wc31',   wc31],
              ['wc32',   wc32],
              ['wc33',   wc33],
              ['wc34',   wc34],
              ['wc35',   wc35],
              ['wc36',   wc36],
              ['wc37',   wc37],
              ['wc38',   wc38],
              ['wc39',   wc39],
              ['wc40',   wc40],
              ['wc41',   wc41],
              ['wc42',   wc42],
              ['wc43',   wc43],
              ['wc44',   wc44],
              ['wc45',   wc45],
              ['wc46',   wc46],
              ['wc47',   wc47],
              ['wc48',   wc48],
              ['wc49',   wc49],
              ['wc50',   wc50],
              ['wc51',   wc51],
              ['wc52',   wc52],
              ['wc53',   wc53],
              ['wc54',   wc54],
              ['wc55',   wc55],
              ['wc56',   wc56],
              ['wc57',   wc57],
              ['wc58',   wc58],
              ['wc59',   wc59],
              ['wc60',   wc60],
              ['wc61',   wc61],
              ['wc62',   wc62],
              ['wc63',   wc63],
              ['wc64',   wc64],
              ['wc65',   wc65],
              ['wc66',   wc66],
              ['wc67',   wc67],
              ['wc68',   wc68],
              ['wc69',   wc69],
              ['wc70',   wc70],
              ['wc71',   wc71],
              ['wc72',   wc72],
              ['wc73',   wc73],
              ['wc74',   wc74],
              ['wc75',   wc75],
              ['wc76',   wc76]
             
               
            ]
    return {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 25,
                depth: 32,
                viewDistance: 40
            },
            style: {
                    color: 'black',
                    fontSize:'25px'
                }
        },
        title: {
            text: "Averages for all workcenters Page 2"
        },
         xAxis: {
            categories: ['1505','1506','1508','1511','1513','1514','1515','1516','1517','1518',"1519","1520","2043","2006","2018"],
            min: 0,
            max:14,
            labels: {
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            }
        },
          scrollbar: {
            enabled: true
        },
        yAxis: {
            title: {
                text: 'Productivity'
            },
            labels: {
                 formatter: function () {
                    return this.value + '%';
                },
                style: {
                    color: 'black',
                    fontSize:'15px'
                }
            },
            stackLabels: {
                enabled: false,
                align: 'center',
                formatter: function () {
                    return this.y + '%';
                }
            }
        },
        
        plotOptions: {
            column: {
                depth: 25
            },
         series: {

                
                dataLabels: {
                    align: 'center',
                    enabled: false,
                    rotation: 0,
                    
                    x: 2,
                    y: -10,
                    formatter: function () {
                       
                            return this.y + '%';
                       // return Highcharts.numberFormat(this.y,1);
                   
                }
                },

            }
        },
        series: [{
            
            data: datatest
        }]




    };

function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }
        showValues();
        
    }
    else
    {
        Session.set("loading",1)
    }
};





Template.allworkcell.rendered = function(){
     


};

Template.allworkcell.helpers({
    timeframe: function () {
/*
So here I need to show the user the time frame this is going on
I need to grab the earliest entry timestamp so the first one
and the last entry time stamp

*/
/*
I'll need to contact a meteor method

*/


},
workcenters: function()
  {
    //I will grab a session variable that has the 
    var department =Session.get("department")
    console.log("this is the department "+ department)
    return Datacenters.find({department:department})

  }
})