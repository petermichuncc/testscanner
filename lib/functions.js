Meteor.methods({
 
 alertremoval: function(name,date,productivity,id) {
      try{
        console.log("removing a item from data entries")
if ($('.modal').hasClass('in')==false)
{
BootstrapModalPrompt.prompt({
    title: "Remove this entry?",
    content: "Name: "+name+" Date: "+ date+ " Productivity: "+productivity
}, function(result) {
  if (result) {
    // User confirmed it, so go do something.
    Meteor.call('rowremoval', id)
  }
  else {
    // User did not confirm, do nothing.
  }
});
}

}
catch(err)
{
  
}


    


}
});

  




    





