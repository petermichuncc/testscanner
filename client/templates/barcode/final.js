



Template.final.rendered =function(){

Materialize.toast('Good job', 999000, 'light-blue lighten-2 cp z-depth-2')
//Add code to save the person and partnumber of job to a database
console.log("tech " + Session.get("tech")+ " partnumber " + Session.get("scanned")+ "mismatch scans "+Session.get("record")+"override" + Session.get("override"))

Meteor.call('scansInsert',Session.get("tech") ,Session.get("scanned"),Session.get("record"),Session.get("override"))
console.log("just called scans insert")

};

Template.final.events({
'click .1': function(event, template){

$( ".cp" ).hide();
 

 


}
});



Template.final.helpers({
    output: function () {
/*
So here I will need to  call a server side function
that will calculate the pieces/bag and bags/box.
Then I will create a toast that will show this data.
*/

     

  },
   piecesperbag: function () {




//So I need to take 1000 and divide it by the usage rate x 1000
console.log("this is scan " + Session.get("scan"))
var bag = ReactiveMethod.call('bags', Session.get("scan"))
var bagusage=bag.usagerate
console.log("this is bag usagerate"+ bagusage)



var piecesPerBag=Number(1000)/(Number(1000)*bagusage)
Session.set("piecesPerBag",piecesPerBag)
console.log("this is the pieces per bag " + piecesPerBag)
     
  },
  bagsperbox: function () {


var box = ReactiveMethod.call('boxes', Session.get("scan"))
var boxusage=box.usagerate
console.log("this is box usage "+ boxusage)

//So I need to take 1000 and divide it by the usage rate x 1000

var boxes= Number(1000)/(Number(1000)*boxusage)
console.log("this is the boxes " + boxes)

var bagsPerBox= boxes/Session.get("piecesPerBag")
     console.log("this is the bags per box " + bagsPerBox)
  }
  
});
