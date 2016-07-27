
Meteor.subscribe('dataentries');


Template.testgraphnew.events({
	'click #add':function(){
		Bars.insert({
			value:Math.floor(Math.random() * 25)
		});
	},
	'click #remove':function(){
		var toRemove = Random.choice(Bars.find().fetch());
		Bars.remove({_id:toRemove._id});
	},
	'click #randomize':function(){
		//loop through bars
		Bars.find({}).forEach(function(bar){
			//update the value of the bar
			Bars.update({_id:bar._id},{$set:{value:Math.floor(Math.random() * 25)}});
		});
	},
	'click #toggleSort':function(){
		if(Session.equals('barChartSort', 'none')){
			Session.set('barChartSort','asc');
			Session.set('barChartSortModifier',{sort:{productivity:1}});
		}else if(Session.equals('barChartSort', 'asc')){
			Session.set('barChartSort','desc');
			Session.set('barChartSortModifier',{sort:{productivity:-1}});
		}else{
			Session.set('barChartSort','none');
			Session.set('barChartSortModifier',{});
		}
	},
	'mouseover rect':function(event, template){
		//alert('you clicked a bar for document with _id=' + $(event.currentTarget).data("id"));
		var id=$(event.currentTarget).data("id")
		
		alert('you clicked a bar for document with productivity ' + Dataentries.find({_id:id}).fetch().pop().productivity);

	}
});


Template.testgraphnew.rendered = function(){
	$(function () {
    $('#container').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
});
};