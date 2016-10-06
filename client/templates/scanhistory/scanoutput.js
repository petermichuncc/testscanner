  
  Session.set("nameoutput", null)
   Session.set("startoutput", null)
    Session.set("endoutput", null)
     Session.set("namenew", 0)
   Session.set("startnew", 0)
    Session.set("endnew", 0)
  Template.outputnew.rendered = function () {


Meteor.subscribe('scans');

}


Template.outputnew.helpers({
    dataentries: function(){
      Meteor.subscribe('scans');
      //console.log("count dataentries "+ Dataentries.find().count())
     //create a meteor method that returns Dataentries.find() 
     

     //Basically I'll have a session variable that holds the persons name
     //
     //Session.set("name", "Yolanda McDougald" )
      var start=moment().format("YYYY-MM-DD 05:00:00.000")
    var name="yolanda"
    var start=Session.get("startoutput")
    var end=Session.get("endoutput")
    console.log("this is the start "+ start+ " this is the end " + end)
    if (Session.get("nameoutput")==null)
    {
console.log("the session is null ")

  if (Scans.find({timestamp: {$gte: start, $lt:end}}).count()>0)
  {
    //test out returning a toast
    return Scans.find({timestamp: {$gte: start, $lt:end}})
  }

    }
else
{

  if (Scans.find({ partnumber: {$regex: Session.get("nameoutput"), $options: 'i'},timestamp: {$gte: start, $lt:end} }).count()>0)
      {

      //test out returning a toast
      return Scans.find({ partnumber: {$regex: Session.get("nameoutput"), $options: 'i'},timestamp: {$gte: start, $lt:end} })
    }

    }      
}
                                                             
})
Template.outputnew.events({
    
 'input #name': function (event, template) {
  console.log("This is the entered name " + event.currentTarget.value)
  if (event.currentTarget.value.length>0)
  {
      //At this point the user is inputting data into the part number text box
      //So I need to focus on it
      //

    
    Session.set("nameoutput", event.currentTarget.value);
  }
 /*
When all 3 of the input boxes are filled then set a session variable to true


 */
  },
  'input #start': function (event, template) {
  console.log("This is the entered name " + event.currentTarget.value)
  if (event.currentTarget.value.length>0)
  {
    var start= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
    Session.set("startoutput", start);
  }
  
  },
  'input #end': function (event, template) {
   
  console.log("This is the entered name " + event.currentTarget.value)
  if (event.currentTarget.value.length>0)
  {
    var end= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
    Session.set("endoutput", end);
  }
 
  },
  'click .2': function(event, template){
   //scan history
     Router.go('menunew');

 return false;
  },

});