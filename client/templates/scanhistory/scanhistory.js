var num = "1"
Template.inputScan.rendered =function(){



Meteor.subscribe('workcenters');

};

Template.inputScan.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
var wc=$( "#partnumber" ).val()
console.log("this is the press" + Workcenters.find({CellID: wc}).fetch().pop().CellNum)

     var starttime= $( "#starttime" ).val()
     var starttime=moment(starttime).format("YYYY-MM-DD")
        console.log("start time entered" + starttime)
      
       
        
    
     Session.setPersistent("start", starttime)
      Session.setPersistent("startchange", starttime)
     console.log("start session" + Session.get("start"))
   


//Here is the logic to determine the page to go to based on the time of day


	Router.go('output');


return false;
}
});


//example partnumber: $( "#partnumber" ).val(),
Template.inputScan.events({
    // events go here
'click .1': function(event, template){
 


}
})