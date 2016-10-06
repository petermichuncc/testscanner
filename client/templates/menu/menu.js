Template.menunew.events({
  'click .1': function(event, template){
  //Barcode scanner
     Router.go('three');

 return false;
  },
'click .2': function(event, template){
   //scan history
     Router.go('outputnew');

 return false;
  },
'click .3': function(event, template){
   //data entry
     Router.go('first');

 return false;
  },
  'click .4': function(event, template){
   //graphs
     Router.go('graph');

 return false;
  }

});