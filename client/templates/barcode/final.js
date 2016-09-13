



Template.final.rendered =function(){
 
 var x = document.getElementById("snackbar")
  console.log("This is the class name " + x.className)
  if (x.className != "show cp z-depth-2" && typeof Session.get("scannedPartnumber")=="string")
{
    x.className = "show cp z-depth-2";
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 999999000);
}
console.log("test")



};

Template.final.events({
'click .1': function(event, template){

$( ".cp" ).hide();
 var count=0
 Session.set("start",1)
Router.go('three');
 


},
'click .2': function(event, template){

$( ".cp" ).hide();
 
Router.go('three');
 


},
'click .3': function(event, template){

  
 

 


}

});



Template.final.helpers({
    output: function () {
 
  
    
 

 /*
MDSnackbars.init();
var options = {
    text: 'message',        // change snackbar's text/html
    toast: false,           // change snackbar's style (true = rounded corners)
    align: 'left',          // align 'left' or 'right'
    fullWidth: false,       // snackbar takes all screen width (overrides align and toast style, also remove default 2px rounded corners)
    bottom: 100,            // position from bottom (default to 20px or 0 if fullWidth is true)
    timeout: 0,          // delay before the snackbar disappears (if 0, the snackbar is permanently showed until MDSnackbars.hide() is called or the snackbar clicked)
    html: false ,           // allows HTML insertion
    clickToClose: true,     // enable/disable the click to close behavior
    animation: 'fade'       // change the animation type ('fade' or 'slideup', default to 'fade')
};
MDSnackbars.show(options)
*/


//Add code to save the person and partnumber of job to a database
//console.log("tech " + Session.get("tech")+ " partnumber " + Session.get("scanned")+ "mismatch scans "+Session.get("record")+"override" + Session.get("override"))


console.log("just called scans insert")

  },
   piecesperbag: function () {




//So I need to take 1000 and divide it by the usage rate x 1000
console.log("this is scan " + Session.get("scan"))
var bag = ReactiveMethod.call('bags', Session.get("scan"))
console.log("this is the type of bag " + typeof bag)
if (typeof bag!="boolean")
{
var bagusage=bag.usagerate
console.log("this is bag usagerate"+ bagusage)



var piecesPerBag=Number(1000)/(Number(1000)*bagusage)
Session.set("piecesPerBag",piecesPerBag)
console.log("this is the pieces per bag " + piecesPerBag)
      var output=piecesPerBag.toString()
      if (piecesPerBag===1)
      {
     output= output.concat(" piece per bag")
 }
 else
 {
	output= output.concat(" pieces per bag")
 	}
    //make a new toast to increase the size of text or put it inside of a 
    //span element
    var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'light-blue lighten-2 cp z-depth-2')
 }
  },
  bagsperbox: function () {


var box = ReactiveMethod.call('boxes', Session.get("scan"))
if (typeof box!="boolean")
{
var boxusage=box.usagerate
console.log("this is box usage "+ boxusage)

//So I need to take 1000 and divide it by the usage rate x 1000

var boxes= Number(1000)/(Number(1000)*boxusage)
console.log("this is the boxes " + boxes)

var bagsPerBox= boxes/Session.get("piecesPerBag")
//convert to string


/*
var span1='<span class="toasttextbig center spantest">'
color=span1.concat(color)
var span2='</span>'
color=color.concat(span2)
*/
//put the bagsper box inside a span

     console.log("this is the bags per box " + bagsPerBox)
     var output=bagsPerBox.toString()
     if (bagsPerBox==1)
      {
     output= output.concat(" bag per box")
 }
 else
 {
	output= output.concat(" bags per box")
 	}
    
var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'light-blue lighten-2 cp z-depth-2 toasttextbig')
  
/*
I need to output text with the Session.get("kanbancount") on it

*/
/*
var output2=Session.get("kanbancount")

if (output2<2)
{
  output2=output2.toString()
output2= output2.concat(" plastic part")
  }
  else if (output2>=2)
  {output2=output2.toString()
    output2= output2.concat(" plastic parts")
  }


    
var span1='<span class="toasttextbig center spantest">'
output2=span1.concat(output2)
var span2='</span>'
output2=output2.concat(span2)
  Materialize.toast(output2, 999999000, 'light-blue lighten-2 cp z-depth-2 toasttextbig')
  */
  }

  },
partnumber: function()
{
//create a reactive method that I call here that returns the current partnumber
//or use a previously created partnumber
if (typeof Session.get("scannedPartnumber")=="string")
{
return Session.get("scannedPartnumber")
}

}
  
});
