
Meteor.subscribe('dataentries');

Template.testgraphnew.topGenresChart = function() {

	//Here I need to have a server side fxn that  I call the returns
	//the average for permanent and another for temp

var temp=ReactiveMethod.call('tempaverage')
var permanent=ReactiveMethod.call('permanentaverage')
if (typeof permanent=="number")
{Session.set("loading",0)
	var datatest=[
                ['Temp',  temp],
                ['Permanent',       permanent]
              
               
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
            text: 'Temp vs Permanent'
        },
         xAxis: {
            categories: ['Temporary', 'Permanent'],
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
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            },
            stackLabels: {
                enabled: true,
                align: 'center'
            }
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
                    y: -10
                }
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



Template.testgraphnew.rendered = function(){
	 


};

Template.first.helpers({
    tempaverage: function () {
//ReactiveMethod.call('tempaverage')
}
})