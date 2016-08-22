
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
Template.allworkcell.topGenresChart = function() {

    //Here I need to have a server side fxn that  I call that returns
    //the average for permanent and another for temp

  

//based on the count I need to determine which data set to ship over to this graph
//
/*
Basically I will 

*/
//I need to grab a average for every work center

/*
var both=ReactiveMethod.call('average',Session.get("department1"))
var temp=both[0]
var permanent=both[1]
*/

var datatest=ReactiveMethod.call('averageallworkcenter',"raceway")
 
console.log("this is typeof dataset "+ typeof datatest)
console.log("this is the type of dataset inner "+ typeof datatestinner)

var test=[50,60]
console.log("this is the test array " + typeof test)
/*
Dataset should be all the work centers associated with a particular department
I'll need to make a reactive method that calls the server to find an array of arrays that
holds all the work centers with a particular department.

*/


if (0==0)
{Session.set("loading",0)
    
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
            text: "Averages for all workcenters Page 1"
        },
         xAxis: {
           
            labels: {
                style: {
                    color: 'black',
                    fontSize:'15px'
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