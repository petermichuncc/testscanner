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
  datasInsert: function(name,date,department,workcenter,shift,planned,actual) {
  
    Dataentries.insert({
  name: name,
     date: date,
     department: department,
     workcenter: workcenter,
     shift:shift,
     planned:planned,
     actual:actual
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
 
  rawmaterial: function(upc)
  {
      
     try{
      upc=Number(upc)
     
      console.log("this is upc1 " + upc)
if (Orders.find({itemid:upc}).count()>=1)
      {
        
        return Orders.find({itemid:upc}).fetch().pop().partnumber
        
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
     
      var upc1=Number(upc)
      var upc=upc.trim()
      //I need to return the partnumber
     

      //order.push()  this will add an item to the array

            if (Kanbans.find({ordernumber:upc1}).count()>=1)
      {
        var count=Kanbans.find({ordernumber:upc1}).count()
        
        
       
       //order.push(Orders.find({ordernumber:upc1}))
        
      }
    else if (Kanbans.find({ordernumber:upc}).count()>=1)
    { 
      var count=Kanbans.find({ordernumber:upc}).count()


          // order.push(Orders.find({ordernumber:upc}))

      }  
     
   
     
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
      upc=upc.trim()
        upc= upc.substr(6);
      console.log("this is the truncated upc "+ upc)
      upc=Number(upc)
    // I should return the object as oppose to just the description
    //
     
      var color=Colors.find({Suffix:upc}).fetch().pop()
     console.log("this is the color "+ color)
     console.log("this is the typeof color "+typeof color)
        return Colors.find({Suffix:upc}).fetch().pop()

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
 kanbanpart: function (upc) {
       //So this function will take in an ekanban upc or item id
       //It will then find the suffix of the item id and then find the associated
       //color from the colors collection.    
      try{

        upc=Number(upc)
     
      console.log("this is upc1 " + upc)
if (Orders.find({itemid:upc}).count()>=1)
      {
        
        var partnumber= Orders.find({itemid:upc}).fetch().pop().partnumber
        
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
  getServerTime: function () {
            var _time = moment().format("YYYY-MM-DD HH:mm:ss.SSS")
            //console.log(_time);
            return _time;
        },


});