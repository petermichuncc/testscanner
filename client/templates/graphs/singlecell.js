
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
Template.singlecell.topGenresChart = function() {

    //Here I need to have a server side fxn that  I call that returns
    //the average for permanent and another for temp

    console.log("This is the graph name " + Session.get("graphname"))
    console.log("this is the workcenter name " + Session.get("workcenterName"))
//based on the count I need to determine which data set to ship over to this graph
//
/*
Basically I will take in a persons name or department then send this info to
the reactive method and return the average for the 

*/
/* basically do certain things based on the users choice
 if the user chose work center then use then send the workcentername
 if the user chose operator then send the operator name
    */
/*
if(Session.get("operator"))

else if()

*/

var both=ReactiveMethod.call('averageworkcenter',Session.get("workcenterName"))



if (typeof shift1=="number"||typeof shift2=="number"||typeof shift3=="number")
{Session.set("loading",0)
    var datatest=[
                ['Shift1',  shift1],
                ['Shift2',   shift2],
                ['Shift3',   shift3]
              
               
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
            text: "Workcenter shift comparison"
        },
         xAxis: {
            categories: ['Shift 1', 'Shift 2','Shift 3'],
            labels: {
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            }
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
                    fontSize:'25px'
                }
            },
            stackLabels: {
                enabled: true,
                align: 'center',
                formatter: function () {
                    return this.y + '%';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{this.y}</b> %',
            shared: true
        },
        plotOptions: {
            column: {
                depth: 25
            },
         series: {
                dataLabels: {
                    align: 'center',
                    enabled: true,
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



Template.singlecell.rendered = function(){
     


};

Template.singlecell.helpers({
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