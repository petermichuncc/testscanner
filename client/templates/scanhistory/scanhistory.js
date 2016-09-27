
Template.input.rendered =function(){





};

Template.input.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
var wc=$( "#partnumber" ).val()


     var starttime= $( "#starttime" ).val()
     var starttime=moment(starttime).format("YYYY-MM-DD")
     var endtime= $( "#starttime" ).val()
     var endtime=moment(endtime).format("YYYY-MM-DD")

        console.log("start time entered" + starttime)
      
       Session.setPersistent("starttime", starttime)
        Session.setPersistent("endtime", endtime)
  



return false;
}
});


//example partnumber: $( "#partnumber" ).val(),
Template.input.events({
    // events go here
'click .1': function(event, template){
 


}
})