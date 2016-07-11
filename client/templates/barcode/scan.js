
Template.scan.rendered =function(){





};

Template.scan.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);





return false;
}
});


//example partnumber: $( "#partnumber" ).val(),