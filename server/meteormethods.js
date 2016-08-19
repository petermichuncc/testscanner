Meteor.methods({
  scansInsert: function(initials,partnumber,record,kanban) {
  
     var post = {
       timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
        initials: initials,
        partnumber: partnumber,
        mismatches:record,
        override:kanban

         
      };
      console.log("here is the partnumber " + post.partnumber)
    Scans.insert(post);

  },
  datasInsert: function(name,date,status,department,workcenter,shift,planned,actual,productivity) {
  
    Dataentries.insert({
    name: name,
     date: date,
     employeestatus: status,
     department: department,
     workcenter: workcenter,
     shift:shift,
     planned:planned,
     actual:actual,
     productivity: productivity,
     timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS")
    });

  },
  part: function(upc) {
    try{
 var newString=upc
      var upc=upc
  
  //I need to also check if the scanned upc is actually a partnumber

  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        return Upcs.find({upc:newString2}).fetch().pop().partnumber
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }

   

 

}catch(err)
{
console.log("error in the part meteor method " + err)
 return null
}
  },
  total: function(upc) {
    try{
      console.log("inside the total function")
     var newString=upc
      var upc=upc
  
  //I need to also check if the scanned upc is actually a partnumber

  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        console.log("inside for loop ")
        console.log("type of answer "+ typeof Upcs.find({upc:newString2}).fetch().pop())
        return  Upcs.find({upc:newString2}).fetch().pop()
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }
 


        

   

 

}catch(err)
{
console.log("error in the part meteor method " + err)
 return false
}
  },
   desc: function(upc) {
     try{
      var newString=upc
      var upc=upc

      //I need to remove the first char, then test this
      // then I need to remove remaining ending chars one by one
      //Then start back again with word that has first char removed
      //remove the first char again and run the test again.
      //I'll need a double for loop
      for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {
        return Upcs.find({upc:newString2}).fetch().pop().desc
        break;
      }
      
        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }
 
   


}catch(err)
{
console.log("error in the desc meteor method " + err)

}
  },
  order: function(upc)
  {
    try{
     

      upc1=Number(upc)
      upc=upc.trim()
      //I need to return the partnumber
      
        if (Orders.find({ordernumber:upc1}).count()>=1)
      {
        
        if (typeof Orders.find({ordernumber:upc1}).fetch().pop().partnumber ==="string")
        {
        return Orders.find({ordernumber:upc1}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc1}).partnumber ==="string")
      {

        return Orders.findOne({ordernumber:upc1}).partnumber
      }
        
      }
    else if (Orders.find({ordernumber:upc}).count()>=1)
    { 
            
 if (typeof Orders.find({ordernumber:upc}).fetch().pop().partnumber ==="string")
        {
        return Orders.find({ordernumber:upc}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc}).partnumber ==="string")
      {

        return Orders.findOne({ordernumber:upc}).partnumber
      }
      }  
      else
      {
        return false
      }

}catch(err)
{
  return false
}
  },
orderdesc: function(upc)
  {
    try{
     
 var order=null
      upc1=Number(upc)
      upc=upc.trim()
      //I need to return the partnumber
      
        if (Orders.find({ordernumber:upc1}).count()>=1)
      {
        
        if (typeof Orders.find({ordernumber:upc1}).fetch().pop().partnumber ==="string")
        {
        order=Orders.find({ordernumber:upc1}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc1}).partnumber ==="string")
      {

        order=Orders.findOne({ordernumber:upc1}).partnumber
      }
        
      }
    else if (Orders.find({ordernumber:upc}).count()>=1)
    { 
            
 if (typeof Orders.find({ordernumber:upc}).fetch().pop().partnumber ==="string")
        {
        order=Orders.find({ordernumber:upc}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc}).partnumber ==="string")
      {

        order=Orders.findOne({ordernumber:upc}).partnumber
      }
      }  
   //Here I need to look in the upc database and retrieve the description for the 
   //associated partnumber
   console.log("this is the partnumber "+ order)
   
   var desc=Upcs.findOne({partnumber:order})
   return desc


}catch(err)
{
  return false
}
  },
 boxes: function(upc)
  {
    try{
     
 var box=null
 var boxdesc=null
      upc1=Number(upc)
      upc=upc.trim()
      //this fxn takes in the upc of the order
      /*
       I need to look for orders that contain a order number from the upc 
       and also that have a component that starts with 31 or 32
       I need to use a regexp to do this 
db.products.find( { sku: { $regex: /^ABC/i } } )  finds items that start with ABC

      Orders.find({ itemid: { $regex: /^32/i },ordernumber:upc1 }).fetch().pop().itemid



        */
        console.log("this is the count ")
console.log("test start")

       
      if (Kanbans.find({ itemid: { $regex: /^32/i },ordernumber:upc1}).count()>=1)
      {console.log("test 1")
        
       box= Kanbans.find({ itemid: { $regex: /^32/i },ordernumber:upc1}).fetch().pop()
      
      }
      else if (Kanbans.find({ itemid: { $regex: /^31/i },ordernumber:upc1}).count()>=1)
      {console.log("test 2")
        
       box= Kanbans.find({ itemid: { $regex: /^31/i },ordernumber:upc1}).fetch().pop()
        
      }
    else if (Kanbans.find({ itemid: { $regex: /^32/i },ordernumber:upc}).count()>=1)
    { console.log("test 3")
            box= Kanbans.find({ itemid: { $regex: /^32/i },ordernumber:upc}).fetch().pop()
     }
    else if (Kanbans.find({ itemid: { $regex: /^31/i },ordernumber:upc}).count()>=1)
    { console.log("test 4")
            box= Kanbans.find({ itemid: { $regex: /^31/i },ordernumber:upc}).fetch().pop()
    }   
   //Here I need to look in the upc database and retrieve the description for the 
   //associated partnumber
   console.log("this is the box "+ box)
   return box


}catch(err)
{
  return false
}
  },
 bags: function(upc)
  {
    try{
     
 var bag=null

      upc1=Number(upc)
      upc=upc.trim()
      //this fxn takes in the upc of the order
      /*
       I need to look for orders that contain a order number from the upc 
       and also that have a component that starts with 31 or 32
       I need to use a regexp to do this 
db.products.find( { sku: { $regex: /^ABC/i } } )  finds items that start with ABC

      Orders.find({ itemid: { $regex: /^32/i },ordernumber:upc1 }).fetch().pop().itemid



        */
   
/*
I need to grab the item description of the box
//Then look and see if it has the substring "POLYBAG" in it

Do a regex and look for the word POLYBAG in the 
desc field

*/
//I need to go through the kanbans db
      if (Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc1, desc:{ $regex: /POLY/i }}).count()>=1)
      {console.log("test 2")
        
       bag= Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc1, desc:{ $regex: /POLY/i }}).fetch().pop()
        
      }
      else if (Orders.find({ itemid: { $regex: /^33/i },ordernumber:upc1, desc:{ $regex: /BAG/i }}).count()>=1)
      {console.log("test 2")
        
       bag= Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc1, desc:{ $regex: /BAG/i }}).fetch().pop()
        
      }
     if (Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc, desc:{ $regex: /POLY/i }}).count()>=1)
    { console.log("test 4")
            bag= Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc, desc:{ $regex: /POLY/i }}).fetch().pop()
    }
     else if (Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc, desc:{ $regex: /BAG/i }}).count()>=1)
    { console.log("test 4")
            bag= Kanbans.find({ itemid: { $regex: /^33/i },ordernumber:upc, desc:{ $regex: /BAG/i }}).fetch().pop()
    }    
   //Here I need to look in the upc database and retrieve the description for the 
   //associated partnumber
   console.log("this is the bag "+ bag)
   console.log("this is the bag itemid"+ bag.itemid)
   return bag


}catch(err)
{
  return false
}
  },
   ekanbans: function(upc)
  {
    try{
     
  var count=0;

      upc1=Number(upc)
      upc=upc.trim()
    
if (Kanbans.find({ordernumber:upc1}).count()>=1)
      { console.log("test 1 count")
        count=Kanbans.find({ordernumber:upc1}).count()
       }
  if (Kanbans.find({ordernumber:upc}).count()>=1)
    {   console.log("test 2 count")
      count=Kanbans.find({ordernumber:upc}).count()
    }  

 console.log("this is the kanban count "+ count)



}catch(err)
{
  return false
}
  },  
  rawmaterial: function(upc,order)
  {
      
     try{
      upc=upc.toString()
      upc=upc.trim()
       order1=Number(order)
      order=order.trim()
      console.log("this is upc1 " + upc)
      console.log("here is the order " + order)
if (Orders.find({itemid:upc,ordernumber:order}).count()>=1)
      {
        console.log("there is a order ")
        return Orders.find({itemid:upc,ordernumber:order}).fetch().pop().partnumber
        
      }
     else if (Orders.find({itemid:upc,ordernumber:order1}).count()>=1)
      {
        console.log("there is a order ")
        return Orders.find({itemid:upc,ordernumber:order1}).fetch().pop().partnumber
        
      }
      else
      {

      }
}catch(err)
{

}

  },

   kanbanarray: function(upc,order)
  {
      
     try{
      upc=upc.toString()
       order1=Number(order)
      order=order.trim()
      console.log("this is upc1 " + upc)
      console.log("here is the order " + order)
if (Orders.find({itemid:upc,ordernumber:order}).count()>=1)
      {
        console.log("there is a order ")
        return Orders.find({itemid:upc,ordernumber:order}).fetch().pop().partnumber
        
      }
     else if (Orders.find({itemid:upc,ordernumber:order1}).count()>=1)
      {
        console.log("there is a order ")
        return Orders.find({itemid:upc,ordernumber:order1}).fetch().pop().partnumber
        
      }
      else
      {

      }
}catch(err)
{

}

  }, 

  compare: function(upc, upc2) {
    try{
 //This is comparing the partnumbers from the job order
 //and the printed bag, box label, and raw material
 //
 console.log("This is type of upc and upc2 "+typeof upc+" "+typeof upc2)
 
 if (typeof upc==="string"&&typeof upc2==="string")
 {console.log("this is upc 1 and 2 "+ upc+" "+upc2)
    if (upc==upc2)
    {console.log("returning green ")
      return "green"
    }
    else if (upc.includes(upc2))
    { console.log("compare a")
      return "green"
    }
    else if (upc2.includes(upc))
    {console.log("compare b")
      return "green"
    }

    else
    {
      return "red"
    }

 }
 

 

}catch(err)
{
  return "red"
console.log("error in the part meteor method " + err)

}
  },
  bagscanned: function(upc)
  {
try{

}catch(err)
{

}
  

  },
  
  text: function(upc)
  {
//I need the reactive var for the kanban boolean
//I need the reactive var for the counter
//I need the reactive var for the barcode check

try{

 var newString=upc
      var upc=upc
  var bag=0
  //I need to also check if the scanned upc is actually a partnumber

  for (var i=0; i<upc.length; i++)
      {
        //this loop should have two different strings
        //the first for the first for loop goes through
        //the length of the string 
         //the string should have the first char removed after each iteration.

          
          var newString2=newString
        while (newString2.length>0)

      { 


           if (Upcs.find({upc:newString2}).count()>=1)
      {

        bag=true
        break;
      }
      

        //remove ending char from new string2
          newString2=newString2.substring(0, newString2.length - 1)


      }
     newString = newString.slice(1);

      }


if (bag===true && (upc.charAt(0)==7||upc.charAt(0)==8))
{
  printedbag=""
  boxlabel="box label"
}
else
{
  printedbag="printed bag"
  boxlabel=""
}


var text="Please scan the "
      text=text.concat(printedbag)
      text=text.concat(boxlabel)
      

return text
}catch(err)
{

}


  },
  kanbandb: function (upc)
  {
    try{
    //I need to find all the components associated with the scanned job order
    // 
    //Then I need to look into the kanban database
    //and search for items with the itemid of the
    //items ids in the orders database
    //  {sort: {itemid: -1}, limit: 1}
     var count=0
      var upc1=Number(upc)
      var upc=upc.trim()
      //I need to return the partnumber
     

      //order.push()  this will add an item to the array
      
            if (Kanbans.find({ordernumber:upc1,itemid: { $regex: /^8/i }}).count()>=1 )
      { 
       
       
        var count=Kanbans.find({ordernumber:upc1,itemid: { $regex: /^8/i }}).count()
      }

      if (Kanbans.find({ordernumber:upc1,itemid: { $regex: /^9/i }}).count()>=1)
      {
        var count2=Kanbans.find({ordernumber:upc1,itemid: { $regex: /^9/i }}).count()
        
        count=count+count2
              
      }
            
            
     
    if (Kanbans.find({ordernumber:upc,itemid: { $regex: /^8/i }}).count()>=1)
    {  
      var count=Kanbans.find({ordernumber:upc,itemid: { $regex: /^8/i }}).count()
      } 
    
    if (Kanbans.find({ordernumber:upc,itemid: { $regex: /^9/i }}).count()>=1)
    {  
      var count2=Kanbans.find({ordernumber:upc,itemid: { $regex: /^9/i }}).count()
    count=count+count2

          // order.push(Orders.find({ordernumber:upc}))

      }  

          // order.push(Orders.find({ordernumber:upc}))

       
     
     
   
     
        console.log("this is the kanbancount " + count)
          return Number(count)
        

}catch(err)
{
  return null 
}

  },
 color: function (upc) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    

     

  
 
 //So I will need to remove the first 6 digits from a string containing the partnumber associated
      //with the ekanban
      //

      try{
        console.log("this is the upc" + upc)
        console.log("this is the typeof upc" + typeof upc)
      upc=upc.trim()
      console.log("this is the upc trimmed" + upc)
      
        upc= upc.substr(6);
      console.log("this is the typeof upc" + typeof upc)
      console.log("this is the truncated upc "+ upc)
       console.log("this is the truncated upc "+ upc.length)
       if (upc.length>0)
       {
      upc=Number(upc)
      console.log("this is the upc converted to a number " + upc)
    // I should return the object as oppose to just the description
    //
     
      var color=Colors.find({Suffix:upc}).fetch().pop()
     console.log("this is the color "+ color)
     console.log("this is the typeof color "+typeof color)
        return Colors.find({Suffix:upc}).fetch().pop()
 }

}catch(err)
{

}


        },
 color2: function (partnumber) {
      
      //so I will use the partnumber to find a upc associated with this partnumber
      //then I will go through the database and find an object that is associated
      //with the upc




      try{

        if (Upcs.find({partnumber:partnumber}).count()>=1)
      {
     
        var upc=Upcs.find({partnumber:partnumber}).fetch().pop().upc
    
      }





      upc=upc.trim()
        upc= upc.substr(6);
    
      upc=Number(upc)
    // I should return the object as oppose to just the description
    //
     
      var color=Colors.find({Suffix:upc}).fetch().pop()
     
    
        return Colors.find({Suffix:upc}).fetch().pop()

}catch(err)
{

}


        },       
 kanbanpart: function (upc,order) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        upc=upc.toString()
        upc=upc.trim()
      console.log("this is upc1 " + upc)
if (Orders.find({itemid:upc,ordernumber:order}).count()>=1)
      {
        
        var partnumber= Orders.find({itemid:upc,ordernumber:order}).fetch().pop().partnumber
        
      }
      else
      {

      }

     console.log("this is the partnumber of the kanban " + partnumber)
     //Now I need to look for the description of this partnumber 
      if (Upcs.find({partnumber:partnumber}).count()>=1)
      {
        console.log("There is a description")
        var desc=Upcs.find({partnumber:partnumber}).fetch().pop().desc
        console.log("this is the description "+ desc)
      }
return desc


}catch(err)
{

}


        },
  datahistory: function () {
   var start=moment().format("YYYY-MM-DD 05:00:00.000")
       var count=Dataentries.find({timestamp: {$gte: start}})
       console.log("test")
 return count



  },      
 datacount: function () {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
//{timestamp: {$gte: timestamp}
        var start=moment().format("YYYY-MM-DD 05:00:00.000")
       var count=Dataentries.find({timestamp: {$gte: start}}).count()
       console.log("this is the count of data entries today " + count)
      
      return count

}catch(err)
{
  console.log("this is the error " + err)
}


        },
 averagesingleworkcenter: function (name,workcenter) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
          
        //This should take in a work center
  
      /*  var string="/"
        string=string.concat(workcenter)
        string=string.concat("/")*/
    
        //count the amount of entries for each shift basically 
        //I must do a regex for the workcenter
      var count=Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 1"}).count()
      
      console.log("this is the shift 1 count " + count)
    

    

    
       
       

       //var totalpermanent=0;
       
      var total = 0;

Dataentries.find({workcenter: { $regex: workcenter }}).map(function(doc) {
  total+= doc.productivity;
});


console.log("this is the total shift 1 "+ total)
if(total!=0 &&count!=0)
{
var avg=total/count
avg=avg.toFixed(2)
avg=Number(avg)
}
else
{
  shift1avg=Number(0)
}

//console.log("this is the temp total in base average" + totaltemp)

var avgarray=[]
avgarray.push(avg)


console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray

}catch(err)
{
  console.log("this is the error " + err)
}


        },                
 averageworkcenter: function (workcenter) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        //This should take in a work center
        console.log("this is the workcenter "+ workcenter)
      /*  var string="/"
        string=string.concat(workcenter)
        string=string.concat("/")*/
    
        //count the amount of entries for each shift basically 
        //I must do a regex for the workcenter
      var shift1count=Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 1"}).count()
      var shift2count=Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 2"}).count()
      var shift3count=Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 3"}).count()

      console.log("this is the shift 1 count " + shift1count)
    console.log("this is the shift 2 count " + shift2count)
    console.log("this is the shift 3 count " + shift3count)

    

    
       var totalshift1=0;
        var totalshift2=0;
         var totalshift3=0;

       //var totalpermanent=0;
       
      var total = 0;

Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 1"}).map(function(doc) {
  totalshift1 += doc.productivity;
});
Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 2"}).map(function(doc) {
  totalshift2 += doc.productivity;
});
Dataentries.find({workcenter: { $regex: workcenter },shift:"shift 3"}).map(function(doc) {
  totalshift3 += doc.productivity;
});
console.log("this is the total shift 1 "+ totalshift1)
if(totalshift1!=0 &&shift1count!=0)
{
var shift1avg=totalshift1/shift1count
shift1avg=shift1avg.toFixed(2)
shift1avg=Number(shift1avg)
}
else
{
  shift1avg=Number(0)
}
console.log("this is the shift1 avg " + shift1avg)
if(totalshift2!=0 &&shift2count!=0)
{
var shift2avg=totalshift2/shift2count
shift2avg=shift2avg.toFixed(2)
shift2avg=Number(shift2avg)
}
else
{
  shift2avg=Number(0)
}
if(totalshift3!=0 &&shift3count!=0)
{
var shift3avg=totalshift3/shift3count
shift3avg=shift3avg.toFixed(2)
shift3avg=Number(shift3avg)
}
else
{
  shift3avg=Number(0)
}

//console.log("this is the temp total in base average" + totaltemp)

var avgarray=[]
avgarray.push(shift1avg)
avgarray.push(shift2avg)
avgarray.push(shift3avg)

console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray

}catch(err)
{
  console.log("this is the error " + err)
}


        },
averageallworkcenter: function () {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        //This should take in a work center
       
      /*
        Basically type all the work centers here

      */
   
     var wc1= "1001"
      var totalwc1=0
   var wc1count=Dataentries.find({workcenter: { $regex: wc1 }}).count()
      Dataentries.find({workcenter: { $regex: wc1 }}).map(function(doc) {
  totalwc1 += doc.productivity;
});
if(totalwc1!=0 &&wc1count!=0)
{
var wc1avg=totalwc1/wc1count
wc1avg=wc1avg.toFixed(2)
wc1avg=Number(wc1avg)
}
else
{
  wc1avg=Number(0)
}



//console.log("this is the temp total in base average" + totaltemp)



    var wc2= "1020"
     var totalwc2=0
   var wc2count=Dataentries.find({workcenter: { $regex: wc2 }}).count()
      Dataentries.find({workcenter: { $regex: wc2 }}).map(function(doc) {
  totalwc2 += doc.productivity;
});
if(totalwc2!=0 &&wc2count!=0)
{
var wc2avg=totalwc2/wc2count
wc2avg=wc2avg.toFixed(2)
wc2avg=Number(wc2avg)
}
else
{
  wc2avg=Number(0)
}

     var wc3= "1021"
   var totalwc3=0
   var wc3count=Dataentries.find({workcenter: { $regex: wc3 }}).count()
      Dataentries.find({workcenter: { $regex: wc3 }}).map(function(doc) {
  totalwc3 += doc.productivity;
});
if(totalwc3!=0 &&wc3count!=0)
{
var wc3avg=totalwc3/wc3count
wc3avg=wc3avg.toFixed(2)
wc3avg=Number(wc3avg)
}
else
{
  wc3avg=Number(0)
}

     var wc4= "1029"
   var totalwc4=0
   var wc4count=Dataentries.find({workcenter: { $regex: wc4 }}).count()
      Dataentries.find({workcenter: { $regex: wc4 }}).map(function(doc) {
  totalwc4 += doc.productivity;
});
if(totalwc4!=0 &&wc4count!=0)
{
var wc4avg=totalwc4/wc4count
wc4avg=wc4avg.toFixed(2)
wc4avg=Number(wc4avg)
}
else
{
  wc4avg=Number(0)
}


     var wc5= "1012"
    var totalwc5=0
   var wc5count=Dataentries.find({workcenter: { $regex: wc5 }}).count()
      Dataentries.find({workcenter: { $regex: wc5 }}).map(function(doc) {
  totalwc5 += doc.productivity;
});
if(totalwc5!=0 &&wc5count!=0)
{
var wc5avg=totalwc5/wc5count
wc5avg=wc5avg.toFixed(2)
wc5avg=Number(wc5avg)
}
else
{
  wc5avg=Number(0)
}

     var wc6= "1013"
      var totalwc6=0
   var wc6count=Dataentries.find({workcenter: { $regex: wc6 }}).count()
      Dataentries.find({workcenter: { $regex: wc6 }}).map(function(doc) {
  totalwc6 += doc.productivity;
});
if(totalwc6!=0 &&wc6count!=0)
{
var wc6avg=totalwc6/wc6count
wc6avg=wc6avg.toFixed(2)
wc6avg=Number(wc6avg)
}
else
{
  wc6avg=Number(0)
}


     var wc7= "1058"
        var totalwc7=0
   var wc7count=Dataentries.find({workcenter: { $regex: wc7 }}).count()
      Dataentries.find({workcenter: { $regex: wc7 }}).map(function(doc) {
  totalwc7 += doc.productivity;
});
if(totalwc7!=0 &&wc7count!=0)
{
var wc7avg=totalwc7/wc7count
wc7avg=wc7avg.toFixed(2)
wc7avg=Number(wc7avg)
}
else
{
  wc7avg=Number(0)
}

     var wc8= "1059"
         var totalwc8=0
   var wc8count=Dataentries.find({workcenter: { $regex: wc8 }}).count()
      Dataentries.find({workcenter: { $regex: wc8 }}).map(function(doc) {
  totalwc8 += doc.productivity;
});
if(totalwc8!=0 &&wc8count!=0)
{
var wc8avg=totalwc8/wc8count
wc8avg=wc8avg.toFixed(2)
wc8avg=Number(wc8avg)
}
else
{
  wc8avg=Number(0)
}


     var wc9= "1095"
         var totalwc9=0
   var wc9count=Dataentries.find({workcenter: { $regex: wc9 }}).count()
      Dataentries.find({workcenter: { $regex: wc9 }}).map(function(doc) {
  totalwc9 += doc.productivity;
});
if(totalwc9!=0 &&wc9count!=0)
{
var wc9avg=totalwc9/wc9count
wc9avg=wc9avg.toFixed(2)
wc9avg=Number(wc9avg)
}
else
{
  wc9avg=Number(0)
}

     var wc10= "1096"
     //
   var totalwc10=0
   var wc10count=Dataentries.find({workcenter: { $regex: wc10 }}).count()
      Dataentries.find({workcenter: { $regex: wc10 }}).map(function(doc) {
  totalwc10 += doc.productivity;
});
if(totalwc10!=0 &&wc10count!=0)
{
var wc10avg=totalwc10/wc10count
wc10avg=wc10avg.toFixed(2)
wc10avg=Number(wc10avg)
}
else
{
  wc10avg=Number(0)
}
     var wc11= "1097"
     var totalwc11=0
   var wc11count=Dataentries.find({workcenter: { $regex: wc11 }}).count()
      Dataentries.find({workcenter: { $regex: wc11 }}).map(function(doc) {
  totalwc11 += doc.productivity;
});
if(totalwc11!=0 &&wc11count!=0)
{
var wc11avg=totalwc11/wc11count
wc11avg=wc11avg.toFixed(2)
wc11avg=Number(wc11avg)
}
else
{
  wc11avg=Number(0)
}


     var wc12= "1501"
      var totalwc12=0
   var wc12count=Dataentries.find({workcenter: { $regex: wc12 }}).count()
      Dataentries.find({workcenter: { $regex: wc12 }}).map(function(doc) {
  totalwc12 += doc.productivity;
});
if(totalwc12!=0 &&wc12count!=0)
{
var wc12avg=totalwc12/wc12count
wc12avg=wc12avg.toFixed(2)
wc12avg=Number(wc12avg)
}
else
{
  wc12avg=Number(0)
}
    

     var wc13= "1502"
      var totalwc13=0
   var wc13count=Dataentries.find({workcenter: { $regex: wc13 }}).count()
      Dataentries.find({workcenter: { $regex: wc13 }}).map(function(doc) {
  totalwc13 += doc.productivity;
});
if(totalwc13!=0 &&wc13count!=0)
{
var wc13avg=totalwc13/wc13count
wc13avg=wc13avg.toFixed(2)
wc13avg=Number(wc13avg)
}
else
{
  wc13avg=Number(0)
}

     var wc14= "1503"
       var totalwc14=0
   var wc14count=Dataentries.find({workcenter: { $regex: wc14 }}).count()
      Dataentries.find({workcenter: { $regex: wc14 }}).map(function(doc) {
  totalwc14 += doc.productivity;
});
if(totalwc14!=0 &&wc14count!=0)
{
var wc14avg=totalwc14/wc14count
wc14avg=wc14avg.toFixed(2)
wc14avg=Number(wc14avg)
}
else
{
  wc14avg=Number(0)
}

     var wc15= "1504"
       var totalwc15=0
   var wc15count=Dataentries.find({workcenter: { $regex: wc15 }}).count()
      Dataentries.find({workcenter: { $regex: wc15 }}).map(function(doc) {
  totalwc15 += doc.productivity;
});
if(totalwc15!=0 &&wc15count!=0)
{
var wc15avg=totalwc15/wc15count
wc15avg=wc15avg.toFixed(2)
wc15avg=Number(wc15avg)
}
else
{
  wc15avg=Number(0)
}

     var wc16= "1505"
      var totalwc16=0
   var wc16count=Dataentries.find({workcenter: { $regex: wc16 }}).count()
      Dataentries.find({workcenter: { $regex: wc16 }}).map(function(doc) {
  totalwc16 += doc.productivity;
});
if(totalwc16!=0 &&wc16count!=0)
{
var wc16avg=totalwc16/wc16count
wc16avg=wc16avg.toFixed(2)
wc16avg=Number(wc16avg)
}
else
{
  wc16avg=Number(0)
}

     var wc17= "1506"
      var totalwc17=0
   var wc17count=Dataentries.find({workcenter: { $regex: wc17 }}).count()
      Dataentries.find({workcenter: { $regex: wc17 }}).map(function(doc) {
  totalwc17 += doc.productivity;
});
if(totalwc17!=0 &&wc17count!=0)
{
var wc17avg=totalwc17/wc17count
wc17avg=wc17avg.toFixed(2)
wc17avg=Number(wc17avg)
}
else
{
  wc17avg=Number(0)
}

     var wc18= "1508"
      var totalwc18=0
   var wc18count=Dataentries.find({workcenter: { $regex: wc18 }}).count()
      Dataentries.find({workcenter: { $regex: wc18 }}).map(function(doc) {
  totalwc18 += doc.productivity;
});
if(totalwc18!=0 &&wc18count!=0)
{
var wc18avg=totalwc18/wc18count
wc18avg=wc18avg.toFixed(2)
wc18avg=Number(wc18avg)
}
else
{
  wc18avg=Number(0)
}

     var wc19= "1511"
      var totalwc19=0
   var wc19count=Dataentries.find({workcenter: { $regex: wc19 }}).count()
      Dataentries.find({workcenter: { $regex: wc19 }}).map(function(doc) {
  totalwc19 += doc.productivity;
});
if(totalwc19!=0 &&wc19count!=0)
{
var wc19avg=totalwc19/wc19count
wc19avg=wc19avg.toFixed(2)
wc19avg=Number(wc19avg)
}
else
{
  wc19avg=Number(0)
}

     var wc20= "1513"
  var totalwc20=0
   var wc20count=Dataentries.find({workcenter: { $regex: wc20 }}).count()
      Dataentries.find({workcenter: { $regex: wc20 }}).map(function(doc) {
  totalwc20 += doc.productivity;
});
if(totalwc20!=0 &&wc20count!=0)
{
var wc20avg=totalwc20/wc20count
wc20avg=wc20avg.toFixed(2)
wc20avg=Number(wc20avg)
}
else
{
  wc20avg=Number(0)
}
     var wc21= "1514"
       var totalwc21=0
   var wc21count=Dataentries.find({workcenter: { $regex: wc21 }}).count()
      Dataentries.find({workcenter: { $regex: wc21 }}).map(function(doc) {
  totalwc21 += doc.productivity;
});
if(totalwc21!=0 &&wc21count!=0)
{
var wc21avg=totalwc21/wc21count
wc21avg=wc21avg.toFixed(2)
wc21avg=Number(wc21avg)
}
else
{
  wc21avg=Number(0)
}

     var wc22= "1515"
       var totalwc22=0
   var wc22count=Dataentries.find({workcenter: { $regex: wc22 }}).count()
      Dataentries.find({workcenter: { $regex: wc22 }}).map(function(doc) {
  totalwc22 += doc.productivity;
});
if(totalwc22!=0 &&wc22count!=0)
{
var wc22avg=totalwc22/wc22count
wc22avg=wc22avg.toFixed(2)
wc22avg=Number(wc22avg)
}
else
{
  wc22avg=Number(0)
}

     var wc23= "1516"
      var totalwc23=0
   var wc23count=Dataentries.find({workcenter: { $regex: wc23 }}).count()
      Dataentries.find({workcenter: { $regex: wc23 }}).map(function(doc) {
  totalwc23 += doc.productivity;
});
if(totalwc23!=0 &&wc23count!=0)
{
var wc23avg=totalwc23/wc23count
wc23avg=wc23avg.toFixed(2)
wc23avg=Number(wc23avg)
}
else
{
  wc23avg=Number(0)
}

     var wc24= "1517"
      var totalwc24=0
   var wc24count=Dataentries.find({workcenter: { $regex: wc24 }}).count()
      Dataentries.find({workcenter: { $regex: wc24 }}).map(function(doc) {
  totalwc24 += doc.productivity;
});
if(totalwc24!=0 &&wc24count!=0)
{
var wc24avg=totalwc24/wc24count
wc24avg=wc24avg.toFixed(2)
wc24avg=Number(wc24avg)
}
else
{
  wc24avg=Number(0)
}

     var wc25= "1518"
      var totalwc25=0
   var wc25count=Dataentries.find({workcenter: { $regex: wc25 }}).count()
      Dataentries.find({workcenter: { $regex: wc25 }}).map(function(doc) {
  totalwc25 += doc.productivity;
});
if(totalwc25!=0 &&wc25count!=0)
{
var wc25avg=totalwc25/wc25count
wc25avg=wc25avg.toFixed(2)
wc25avg=Number(wc25avg)
}
else
{
  wc25avg=Number(0)
}

     var wc26= "1519"
       var totalwc26=0
   var wc26count=Dataentries.find({workcenter: { $regex: wc26 }}).count()
      Dataentries.find({workcenter: { $regex: wc26 }}).map(function(doc) {
  totalwc26 += doc.productivity;
});
if(totalwc26!=0 &&wc26count!=0)
{
var wc26avg=totalwc26/wc26count
wc26avg=wc26avg.toFixed(2)
wc26avg=Number(wc26avg)
}
else
{
  wc26avg=Number(0)
}

     var wc27= "1520"
      var totalwc27=0
   var wc27count=Dataentries.find({workcenter: { $regex: wc27 }}).count()
      Dataentries.find({workcenter: { $regex: wc27 }}).map(function(doc) {
  totalwc27 += doc.productivity;
});
if(totalwc27!=0 &&wc27count!=0)
{
var wc27avg=totalwc27/wc27count
wc27avg=wc27avg.toFixed(2)
wc27avg=Number(wc27avg)
}
else
{
  wc27avg=Number(0)
}

     var wc28= "2043"
      var totalwc28=0
   var wc28count=Dataentries.find({workcenter: { $regex: wc28 }}).count()
      Dataentries.find({workcenter: { $regex: wc28 }}).map(function(doc) {
  totalwc28 += doc.productivity;
});
if(totalwc28!=0 &&wc28count!=0)
{
var wc28avg=totalwc28/wc28count
wc28avg=wc28avg.toFixed(2)
wc28avg=Number(wc28avg)
}
else
{
  wc28avg=Number(0)
}


     var wc29= "2006"
      var totalwc29=0
   var wc29count=Dataentries.find({workcenter: { $regex: wc29 }}).count()
      Dataentries.find({workcenter: { $regex: wc29 }}).map(function(doc) {
  totalwc29 += doc.productivity;
});
if(totalwc29!=0 &&wc29count!=0)
{
var wc29avg=totalwc29/wc29count
wc29avg=wc29avg.toFixed(2)
wc29avg=Number(wc29avg)
}
else
{
  wc29avg=Number(0)
}

     var wc30= "2018"
        var totalwc30=0
   var wc30count=Dataentries.find({workcenter: { $regex: wc30 }}).count()
      Dataentries.find({workcenter: { $regex: wc30 }}).map(function(doc) {
  totalwc30 += doc.productivity;
});
if(totalwc30!=0 &&wc11count!=0)
{
var wc30avg=totalwc30/wc30count
wc30avg=wc30avg.toFixed(2)
wc30avg=Number(wc30avg)
}
else
{
  wc30avg=Number(0)
}

     var wc31= "2039"
       var totalwc31=0
   var wc31count=Dataentries.find({workcenter: { $regex: wc31 }}).count()
      Dataentries.find({workcenter: { $regex: wc31 }}).map(function(doc) {
  totalwc31 += doc.productivity;
});
if(totalwc31!=0 &&wc31count!=0)
{
var wc31avg=totalwc31/wc31count
wc31avg=wc31avg.toFixed(2)
wc31avg=Number(wc31avg)
}
else
{
  wc31avg=Number(0)
}

     var wc32= "2060"
  var totalwc32=0
   var wc32count=Dataentries.find({workcenter: { $regex: wc32 }}).count()
      Dataentries.find({workcenter: { $regex: wc32 }}).map(function(doc) {
  totalwc32 += doc.productivity;
});
if(totalwc32!=0 &&wc32count!=0)
{
var wc32avg=totalwc32/wc32count
wc32avg=wc32avg.toFixed(2)
wc32avg=Number(wc32avg)
}
else
{
  wc32avg=Number(0)
}

     var wc33= "2071"
       var totalwc33=0
   var wc33count=Dataentries.find({workcenter: { $regex: wc33 }}).count()
      Dataentries.find({workcenter: { $regex: wc33 }}).map(function(doc) {
  totalwc33 += doc.productivity;
});
if(totalwc33!=0 &&wc33count!=0)
{
var wc33avg=totalwc33/wc33count
wc33avg=wc33avg.toFixed(2)
wc33avg=Number(wc33avg)
}
else
{
  wc33avg=Number(0)
}

     var wc34= "2091"
      var totalwc34=0
   var wc34count=Dataentries.find({workcenter: { $regex: wc34 }}).count()
      Dataentries.find({workcenter: { $regex: wc34 }}).map(function(doc) {
  totalwc34 += doc.productivity;
});
if(totalwc34!=0 &&wc34count!=0)
{
var wc34avg=totalwc34/wc34count
wc34avg=wc34avg.toFixed(2)
wc34avg=Number(wc34avg)
}
else
{
  wc34avg=Number(0)
}

     var wc35= "2092"
       var totalwc35=0
   var wc35count=Dataentries.find({workcenter: { $regex: wc35 }}).count()
      Dataentries.find({workcenter: { $regex: wc35 }}).map(function(doc) {
  totalwc35 += doc.productivity;
});
if(totalwc35!=0 &&wc35count!=0)
{
var wc35avg=totalwc35/wc35count
wc35avg=wc35avg.toFixed(2)
wc35avg=Number(wc35avg)
}
else
{
  wc35avg=Number(0)
}


     var wc36= "6020"
      var totalwc36=0
   var wc36count=Dataentries.find({workcenter: { $regex: wc36 }}).count()
      Dataentries.find({workcenter: { $regex: wc36 }}).map(function(doc) {
  totalwc36 += doc.productivity;
});
if(totalwc36!=0 &&wc36count!=0)
{
var wc36avg=totalwc36/wc36count
wc36avg=wc36avg.toFixed(2)
wc36avg=Number(wc36avg)
}
else
{
  wc36avg=Number(0)
}

     var wc37= "6021"
       var totalwc37=0
   var wc37count=Dataentries.find({workcenter: { $regex: wc37 }}).count()
      Dataentries.find({workcenter: { $regex: wc37 }}).map(function(doc) {
  totalwc37 += doc.productivity;
});
if(totalwc37!=0 &&wc37count!=0)
{
var wc37avg=totalwc37/wc37count
wc37avg=wc37avg.toFixed(2)
wc37avg=Number(wc37avg)
}
else
{
  wc37avg=Number(0)
}

     var wc38= "6105"
       var totalwc38=0
   var wc38count=Dataentries.find({workcenter: { $regex: wc38 }}).count()
      Dataentries.find({workcenter: { $regex: wc38 }}).map(function(doc) {
  totalwc38 += doc.productivity;
});
if(totalwc38!=0 &&wc38count!=0)
{
var wc38avg=totalwc38/wc38count
wc38avg=wc38avg.toFixed(2)
wc38avg=Number(wc38avg)
}
else
{
  wc38avg=Number(0)
}

     var wc39= "6234"
       var totalwc39=0
   var wc39count=Dataentries.find({workcenter: { $regex: wc39 }}).count()
      Dataentries.find({workcenter: { $regex: wc39 }}).map(function(doc) {
  totalwc39 += doc.productivity;
});
if(totalwc39!=0 &&wc39count!=0)
{
var wc39avg=totalwc39/wc39count
wc39avg=wc39avg.toFixed(2)
wc39avg=Number(wc39avg)
}
else
{
  wc39avg=Number(0)
}

     var wc40= "6304"
  var totalwc40=0
   var wc40count=Dataentries.find({workcenter: { $regex: wc40 }}).count()
      Dataentries.find({workcenter: { $regex: wc40 }}).map(function(doc) {
  totalwc40 += doc.productivity;
});
if(totalwc40!=0 &&wc40count!=0)
{
var wc40avg=totalwc40/wc40count
wc40avg=wc40avg.toFixed(2)
wc40avg=Number(wc40avg)
}
else
{
  wc40avg=Number(0)
}

     var wc41= "6305"
       var totalwc41=0
   var wc41count=Dataentries.find({workcenter: { $regex: wc41 }}).count()
      Dataentries.find({workcenter: { $regex: wc41 }}).map(function(doc) {
  totalwc41 += doc.productivity;
});
if(totalwc41!=0 &&wc41count!=0)
{
var wc41avg=totalwc41/wc41count
wc41avg=wc41avg.toFixed(2)
wc41avg=Number(wc41avg)
}
else
{
  wc41avg=Number(0)
}

     var wc42= "6308"
       var totalwc42=0
   var wc42count=Dataentries.find({workcenter: { $regex: wc42 }}).count()
      Dataentries.find({workcenter: { $regex: wc42 }}).map(function(doc) {
  totalwc42 += doc.productivity;
});
if(totalwc42!=0 &&wc42count!=0)
{
var wc42avg=totalwc42/wc42count
wc42avg=wc42avg.toFixed(2)
wc42avg=Number(wc42avg)
}
else
{
  wc42avg=Number(0)
}

     var wc43= "6315"
       var totalwc43=0
   var wc43count=Dataentries.find({workcenter: { $regex: wc43 }}).count()
      Dataentries.find({workcenter: { $regex: wc43 }}).map(function(doc) {
  totalwc43 += doc.productivity;
});
if(totalwc43!=0 &&wc43count!=0)
{
var wc43avg=totalwc43/wc43count
wc43avg=wc43avg.toFixed(2)
wc43avg=Number(wc43avg)
}
else
{
  wc43avg=Number(0)
}

     var wc44= "6316"
      var totalwc44=0
   var wc44count=Dataentries.find({workcenter: { $regex: wc44 }}).count()
      Dataentries.find({workcenter: { $regex: wc44 }}).map(function(doc) {
  totalwc44 += doc.productivity;
});
if(totalwc44!=0 &&wc44count!=0)
{
var wc44avg=totalwc44/wc44count
wc44avg=wc44avg.toFixed(2)
wc44avg=Number(wc44avg)
}
else
{
  wc44avg=Number(0)
}

     var wc45= "6318"
      var totalwc45=0
   var wc45count=Dataentries.find({workcenter: { $regex: wc45 }}).count()
      Dataentries.find({workcenter: { $regex: wc45 }}).map(function(doc) {
  totalwc45 += doc.productivity;
});
if(totalwc45!=0 &&wc45count!=0)
{
var wc45avg=totalwc45/wc45count
wc45avg=wc45avg.toFixed(2)
wc45avg=Number(wc45avg)
}
else
{
  wc45avg=Number(0)
}

     var wc46= "6319"
       var totalwc46=0
   var wc46count=Dataentries.find({workcenter: { $regex: wc46 }}).count()
      Dataentries.find({workcenter: { $regex: wc46 }}).map(function(doc) {
  totalwc46 += doc.productivity;
});
if(totalwc46!=0 &&wc46count!=0)
{
var wc46avg=totalwc46/wc46count
wc46avg=wc46avg.toFixed(2)
wc46avg=Number(wc46avg)
}
else
{
  wc46avg=Number(0)
}

     var wc47= "6320"
       var totalwc47=0
   var wc47count=Dataentries.find({workcenter: { $regex: wc47 }}).count()
      Dataentries.find({workcenter: { $regex: wc47 }}).map(function(doc) {
  totalwc47 += doc.productivity;
});
if(totalwc47!=0 &&wc47count!=0)
{
var wc47avg=totalwc47/wc47count
wc47avg=wc47avg.toFixed(2)
wc47avg=Number(wc47avg)
}
else
{
  wc47avg=Number(0)
}

     var wc48= "6341"
      var totalwc48=0
   var wc48count=Dataentries.find({workcenter: { $regex: wc48 }}).count()
      Dataentries.find({workcenter: { $regex: wc48 }}).map(function(doc) {
  totalwc48 += doc.productivity;
});
if(totalwc48!=0 &&wc48count!=0)
{
var wc48avg=totalwc48/wc48count
wc48avg=wc48avg.toFixed(2)
wc48avg=Number(wc48avg)
}
else
{
  wc48avg=Number(0)
}

     var wc49= "6343"
     
  var totalwc49=0
   var wc49count=Dataentries.find({workcenter: { $regex: wc49 }}).count()
      Dataentries.find({workcenter: { $regex: wc49 }}).map(function(doc) {
  totalwc49 += doc.productivity;
});
if(totalwc49!=0 &&wc49count!=0)
{
var wc49avg=totalwc49/wc49count
wc49avg=wc49avg.toFixed(2)
wc49avg=Number(wc49avg)
}
else
{
  wc49avg=Number(0)
}
     var wc50= "6345"
  var totalwc50=0
   var wc50count=Dataentries.find({workcenter: { $regex: wc50 }}).count()
      Dataentries.find({workcenter: { $regex: wc50 }}).map(function(doc) {
  totalwc50 += doc.productivity;
});
if(totalwc50!=0 &&wc50count!=0)
{
var wc50avg=totalwc50/wc50count
wc50avg=wc50avg.toFixed(2)
wc50avg=Number(wc50avg)
}
else
{
  wc50avg=Number(0)
}

     var wc51= "6346"
       var totalwc51=0
   var wc51count=Dataentries.find({workcenter: { $regex: wc51 }}).count()
      Dataentries.find({workcenter: { $regex: wc51 }}).map(function(doc) {
  totalwc51 += doc.productivity;
});
if(totalwc51!=0 &&wc51count!=0)
{
var wc51avg=totalwc51/wc51count
wc51avg=wc51avg.toFixed(2)
wc51avg=Number(wc51avg)
}
else
{
  wc51avg=Number(0)
}

     var wc52= "6355"
      var totalwc52=0
   var wc52count=Dataentries.find({workcenter: { $regex: wc52 }}).count()
      Dataentries.find({workcenter: { $regex: wc52 }}).map(function(doc) {
  totalwc52 += doc.productivity;
});
if(totalwc52!=0 &&wc52count!=0)
{
var wc52avg=totalwc52/wc52count
wc52avg=wc52avg.toFixed(2)
wc52avg=Number(wc52avg)
}
else
{
  wc52avg=Number(0)
}

     var wc53= "6364"
       var totalwc53=0
   var wc53count=Dataentries.find({workcenter: { $regex: wc53 }}).count()
      Dataentries.find({workcenter: { $regex: wc53 }}).map(function(doc) {
  totalwc53 += doc.productivity;
});
if(totalwc53!=0 &&wc53count!=0)
{
var wc53avg=totalwc53/wc53count
wc53avg=wc53avg.toFixed(2)
wc53avg=Number(wc53avg)
}
else
{
  wc53avg=Number(0)
}

     var wc54= "6370"
     
  var totalwc54=0
   var wc54count=Dataentries.find({workcenter: { $regex: wc54 }}).count()
      Dataentries.find({workcenter: { $regex: wc54 }}).map(function(doc) {
  totalwc54 += doc.productivity;
});
if(totalwc54!=0 &&wc54count!=0)
{
var wc54avg=totalwc54/wc54count
wc54avg=wc54avg.toFixed(2)
wc54avg=Number(wc54avg)
}
else
{
  wc54avg=Number(0)
}

     var wc55= "3021"
       var totalwc55=0
   var wc55count=Dataentries.find({workcenter: { $regex: wc55 }}).count()
      Dataentries.find({workcenter: { $regex: wc55 }}).map(function(doc) {
  totalwc55 += doc.productivity;
});
if(totalwc55!=0 &&wc55count!=0)
{
var wc55avg=totalwc55/wc55count
wc55avg=wc55avg.toFixed(2)
wc55avg=Number(wc55avg)
}
else
{
  wc55avg=Number(0)
}


     var wc56= "5101"
      var totalwc56=0
   var wc56count=Dataentries.find({workcenter: { $regex: wc56 }}).count()
      Dataentries.find({workcenter: { $regex: wc56 }}).map(function(doc) {
  totalwc56 += doc.productivity;
});
if(totalwc56!=0 &&wc56count!=0)
{
var wc56avg=totalwc56/wc56count
wc56avg=wc56avg.toFixed(2)
wc56avg=Number(wc56avg)
}
else
{
  wc56avg=Number(0)
}

     var wc57= "5102"
       var totalwc57=0
   var wc57count=Dataentries.find({workcenter: { $regex: wc57 }}).count()
      Dataentries.find({workcenter: { $regex: wc57 }}).map(function(doc) {
  totalwc57 += doc.productivity;
});
if(totalwc57!=0 &&wc57count!=0)
{
var wc57avg=totalwc57/wc57count
wc57avg=wc57avg.toFixed(2)
wc57avg=Number(wc57avg)
}
else
{
  wc57avg=Number(0)
}

     var wc58= "5103"
       var totalwc58=0
   var wc58count=Dataentries.find({workcenter: { $regex: wc58 }}).count()
      Dataentries.find({workcenter: { $regex: wc58 }}).map(function(doc) {
  totalwc58 += doc.productivity;
});
if(totalwc58!=0 &&wc58count!=0)
{
var wc58avg=totalwc58/wc58count
wc58avg=wc58avg.toFixed(2)
wc58avg=Number(wc58avg)
}
else
{
  wc58avg=Number(0)
}

     var wc59= "5104"
       var totalwc59=0
   var wc59count=Dataentries.find({workcenter: { $regex: wc59 }}).count()
      Dataentries.find({workcenter: { $regex: wc59 }}).map(function(doc) {
  totalwc59 += doc.productivity;
});
if(totalwc59!=0 &&wc59count!=0)
{
var wc59avg=totalwc59/wc59count
wc59avg=wc59avg.toFixed(2)
wc59avg=Number(wc59avg)
}
else
{
  wc59avg=Number(0)
}

     var wc60= "5105"
   var totalwc60=0
   var wc60count=Dataentries.find({workcenter: { $regex: wc60 }}).count()
      Dataentries.find({workcenter: { $regex: wc60 }}).map(function(doc) {
  totalwc60 += doc.productivity;
});
if(totalwc60!=0 &&wc60count!=0)
{
var wc60avg=totalwc60/wc60count
wc60avg=wc60avg.toFixed(2)
wc60avg=Number(wc60avg)
}
else
{
  wc60avg=Number(0)
}

     var wc61= "5300"
     
  var totalwc61=0
   var wc61count=Dataentries.find({workcenter: { $regex: wc61 }}).count()
      Dataentries.find({workcenter: { $regex: wc61 }}).map(function(doc) {
  totalwc61 += doc.productivity;
});
if(totalwc61!=0 &&wc61count!=0)
{
var wc61avg=totalwc61/wc61count
wc61avg=wc61avg.toFixed(2)
wc61avg=Number(wc61avg)
}
else
{
  wc61avg=Number(0)
}

     var wc62= "1"
       var totalwc62=0
   var wc62count=Dataentries.find({workcenter: { $regex: wc62 }}).count()
      Dataentries.find({workcenter: { $regex: wc62 }}).map(function(doc) {
  totalwc62 += doc.productivity;
});
if(totalwc62!=0 &&wc62count!=0)
{
var wc62avg=totalwc62/wc62count
wc62avg=wc62avg.toFixed(2)
wc62avg=Number(wc62avg)
}
else
{
  wc62avg=Number(0)
}

     var wc63= "2"
     
  var totalwc63=0
   var wc63count=Dataentries.find({workcenter: { $regex: wc63 }}).count()
      Dataentries.find({workcenter: { $regex: wc63 }}).map(function(doc) {
  totalwc63 += doc.productivity;
});
if(totalwc63!=0 &&wc63count!=0)
{
var wc63avg=totalwc63/wc63count
wc63avg=wc63avg.toFixed(2)
wc63avg=Number(wc63avg)
}
else
{
  wc63avg=Number(0)
}
     var wc64= "3"
       var totalwc64=0
   var wc64count=Dataentries.find({workcenter: { $regex: wc64 }}).count()
      Dataentries.find({workcenter: { $regex: wc64 }}).map(function(doc) {
  totalwc64 += doc.productivity;
});
if(totalwc64!=0 &&wc64count!=0)
{
var wc64avg=totalwc64/wc64count
wc64avg=wc64avg.toFixed(2)
wc64avg=Number(wc64avg)
}
else
{
  wc64avg=Number(0)
}

     var wc65= "4"
      var totalwc65=0
   var wc65count=Dataentries.find({workcenter: { $regex: wc65 }}).count()
      Dataentries.find({workcenter: { $regex: wc65 }}).map(function(doc) {
  totalwc65 += doc.productivity;
});
if(totalwc65!=0 &&wc65count!=0)
{
var wc65avg=totalwc65/wc65count
wc65avg=wc65avg.toFixed(2)
wc65avg=Number(wc65avg)
}
else
{
  wc65avg=Number(0)
}

     var wc66= "5"
       var totalwc66=0
   var wc66count=Dataentries.find({workcenter: { $regex: wc66 }}).count()
      Dataentries.find({workcenter: { $regex: wc66 }}).map(function(doc) {
  totalwc66 += doc.productivity;
});
if(totalwc66!=0 &&wc66count!=0)
{
var wc66avg=totalwc66/wc66count
wc66avg=wc66avg.toFixed(2)
wc66avg=Number(wc66avg)
}
else
{
  wc66avg=Number(0)
}

     var wc67= "6"
      var totalwc67=0
   var wc67count=Dataentries.find({workcenter: { $regex: wc67 }}).count()
      Dataentries.find({workcenter: { $regex: wc67 }}).map(function(doc) {
  totalwc67 += doc.productivity;
});
if(totalwc67!=0 &&wc67count!=0)
{
var wc67avg=totalwc67/wc67count
wc67avg=wc67avg.toFixed(2)
wc67avg=Number(wc67avg)
}
else
{
  wc67avg=Number(0)
}

     var wc68= "7"
       var totalwc68=0
   var wc68count=Dataentries.find({workcenter: { $regex: wc68 }}).count()
      Dataentries.find({workcenter: { $regex: wc68 }}).map(function(doc) {
  totalwc68 += doc.productivity;
});
if(totalwc68!=0 &&wc68count!=0)
{
var wc68avg=totalwc68/wc68count
wc68avg=wc68avg.toFixed(2)
wc68avg=Number(wc68avg)
}
else
{
  wc68avg=Number(0)
}

     var wc69= "8"
    
  var totalwc69=0
   var wc69count=Dataentries.find({workcenter: { $regex: wc69 }}).count()
      Dataentries.find({workcenter: { $regex: wc69 }}).map(function(doc) {
  totalwc69 += doc.productivity;
});
if(totalwc69!=0 &&wc69count!=0)
{
var wc69avg=totalwc69/wc69count
wc69avg=wc69avg.toFixed(2)
wc69avg=Number(wc69avg)
}
else
{
  wc69avg=Number(0)
}
     var wc70= "9"
  var totalwc70=0
   var wc70count=Dataentries.find({workcenter: { $regex: wc70 }}).count()
      Dataentries.find({workcenter: { $regex: wc70 }}).map(function(doc) {
  totalwc70 += doc.productivity;
});
if(totalwc70!=0 &&wc70count!=0)
{
var wc70avg=totalwc70/wc70count
wc70avg=wc70avg.toFixed(2)
wc70avg=Number(wc70avg)
}
else
{
  wc70avg=Number(0)
}

     var wc71= "10"
    
  var totalwc71=0
   var wc71count=Dataentries.find({workcenter: { $regex: wc71 }}).count()
      Dataentries.find({workcenter: { $regex: wc71 }}).map(function(doc) {
  totalwc71 += doc.productivity;
});
if(totalwc71!=0 &&wc71count!=0)
{
var wc71avg=totalwc71/wc71count
wc71avg=wc71avg.toFixed(2)
wc71avg=Number(wc71avg)
}
else
{
  wc71avg=Number(0)
}
     var wc72= "11"
       var totalwc72=0
   var wc72count=Dataentries.find({workcenter: { $regex: wc72 }}).count()
      Dataentries.find({workcenter: { $regex: wc72 }}).map(function(doc) {
  totalwc72 += doc.productivity;
});
if(totalwc72!=0 &&wc72count!=0)
{
var wc72avg=totalwc72/wc72count
wc72avg=wc72avg.toFixed(2)
wc72avg=Number(wc72avg)
}
else
{
  wc72avg=Number(0)
}

     var wc73= "12"
       var totalwc73=0
   var wc73count=Dataentries.find({workcenter: { $regex: wc73 }}).count()
      Dataentries.find({workcenter: { $regex: wc73 }}).map(function(doc) {
  totalwc73 += doc.productivity;
});
if(totalwc73!=0 &&wc73count!=0)
{
var wc73avg=totalwc73/wc73count
wc73avg=wc73avg.toFixed(2)
wc73avg=Number(wc73avg)
}
else
{
  wc73avg=Number(0)
}

     var wc74= "13"
       var totalwc74=0
   var wc74count=Dataentries.find({workcenter: { $regex: wc74 }}).count()
      Dataentries.find({workcenter: { $regex: wc74 }}).map(function(doc) {
  totalwc74 += doc.productivity;
});
if(totalwc74!=0 &&wc74count!=0)
{
var wc74avg=totalwc74/wc74count
wc74avg=wc74avg.toFixed(2)
wc74avg=Number(wc74avg)
}
else
{
  wc74avg=Number(0)
}

     var wc75= "14"
       var totalwc75=0
   var wc75count=Dataentries.find({workcenter: { $regex: wc75 }}).count()
      Dataentries.find({workcenter: { $regex: wc75 }}).map(function(doc) {
  totalwc75 += doc.productivity;
});
if(totalwc75!=0 &&wc75count!=0)
{
var wc75avg=totalwc75/wc75count
wc75avg=wc75avg.toFixed(2)
wc75avg=Number(wc75avg)
}
else
{
  wc75avg=Number(0)
}

     var wc76= "49"
      var totalwc76=0
   var wc76count=Dataentries.find({workcenter: { $regex: wc76 }}).count()
      Dataentries.find({workcenter: { $regex: wc76 }}).map(function(doc) {
  totalwc76 += doc.productivity;
});
if(totalwc76!=0 &&wc76count!=0)
{
var wc76avg=totalwc76/wc76count
wc76avg=wc76avg.toFixed(2)
wc76avg=Number(wc76avg)
}
else
{
  wc76avg=Number(0)
}

     var avgarray=[]
avgarray.push(wc1avg)
avgarray.push(wc2avg)
avgarray.push(wc3avg)
avgarray.push(wc4avg)
avgarray.push(wc5avg)
avgarray.push(wc6avg)
avgarray.push(wc7avg)
avgarray.push(wc8avg)
avgarray.push(wc9avg)
avgarray.push(wc10avg)
avgarray.push(wc11avg)
avgarray.push(wc12avg)
avgarray.push(wc13avg)
avgarray.push(wc14avg)
avgarray.push(wc15avg)
avgarray.push(wc16avg)
avgarray.push(wc17avg)
avgarray.push(wc18avg)
avgarray.push(wc19avg)
avgarray.push(wc20avg)
avgarray.push(wc21avg)
avgarray.push(wc22avg)
avgarray.push(wc23avg)
avgarray.push(wc24avg)
avgarray.push(wc25avg)
avgarray.push(wc26avg)
avgarray.push(wc27avg)
avgarray.push(wc28avg)
avgarray.push(wc29avg)
avgarray.push(wc30avg)
avgarray.push(wc31avg)
avgarray.push(wc32avg)
avgarray.push(wc33avg)
avgarray.push(wc34avg)
avgarray.push(wc35avg)
avgarray.push(wc36avg)
avgarray.push(wc37avg)
avgarray.push(wc38avg)
avgarray.push(wc39avg)
avgarray.push(wc40avg)
avgarray.push(wc41avg)
avgarray.push(wc42avg)
avgarray.push(wc43avg)
avgarray.push(wc44avg)
avgarray.push(wc45avg)
avgarray.push(wc46avg)
avgarray.push(wc47avg)
avgarray.push(wc48avg)
avgarray.push(wc49avg)
avgarray.push(wc50avg)
avgarray.push(wc51avg)
avgarray.push(wc52avg)
avgarray.push(wc53avg)
avgarray.push(wc54avg)
avgarray.push(wc55avg)
avgarray.push(wc56avg)
avgarray.push(wc57avg)
avgarray.push(wc58avg)
avgarray.push(wc59avg)
avgarray.push(wc60avg)
avgarray.push(wc61avg)
avgarray.push(wc62avg)
avgarray.push(wc63avg)
avgarray.push(wc64avg)
avgarray.push(wc65avg)
avgarray.push(wc66avg)
avgarray.push(wc67avg)
avgarray.push(wc68avg)
avgarray.push(wc69avg)
avgarray.push(wc70avg)
avgarray.push(wc71avg)
avgarray.push(wc72avg)
avgarray.push(wc73avg)
avgarray.push(wc74avg)
avgarray.push(wc75avg)
avgarray.push(wc76avg)

return avgarray



}catch(err)
{
  console.log("this is the error " + err)
}


        },


average: function (department) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
        console.log("this is the department "+ department)
      var tempcount=Dataentries.find({employeestatus:"temp", department:department}).count()
      var permanentcount=Dataentries.find({employeestatus:"permanent", department:department}).count() 
      console.log("this is the perm " + permanentcount+ " temp count "+tempcount)
       var totaltemp=0;
       var totalpermanent=0;
       
      var total = 0;

Dataentries.find({employeestatus:"temp", department:department}).map(function(doc) {
  totaltemp += doc.productivity;
});
Dataentries.find({employeestatus:"permanent", department:department}).map(function(doc) {
  totalpermanent += doc.productivity;
});
if(totaltemp!=0 &&tempcount!=0)
{
var tempavg=totaltemp/tempcount
tempavg=tempavg.toFixed(2)
tempavg=Number(tempavg)
}
else
{
  tempavg=Number(0)
}
if(totalpermanent!=0 &&permanentcount!=0)
{
var permanentavg=totalpermanent/permanentcount
permanentavg=permanentavg.toFixed(2)
permanentavg=Number(permanentavg)
}
else
{
  permanentavg=Number(0)
}
//console.log("this is the temp total in base average" + totaltemp)
console.log("This is the total using map "+ totaltemp)
console.log("This is the total using map "+ totalpermanent)
console.log("this is the tempavg "+tempavg + " permavg " +permanentavg)
var avgarray=[]
avgarray.push(tempavg)
avgarray.push(permanentavg)

console.log("this is the array length "+ avgarray.length)
console.log("this is array position 1 " + avgarray[0])
return avgarray
}catch(err)
{
  console.log("this is the error " + err)
}


        },

 
        rowremoval: function (id) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{
        console.log("this is the id "+id)
        console.log("amount of db entries " + Dataentries.find({_id:id}).count())
       Dataentries.remove({_id: id});

}catch(err)
{
  console.log("this is the error " + err)
}


        },

  getServerTime: function () {
            var _time = moment().format("YYYY-MM-DD HH:mm:ss.SSS")
            //console.log(_time);
            return _time;
        },
     dataTable: function () {
           console.log("this is the type of data server " + typeof Dataentries.find({},{sort: {timestamp: -1}, limit: 5}))
        return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})


        }     


});