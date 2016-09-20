Scans = new Mongo.Collection('scans');
Upcs = new Mongo.Collection('upcs');
Orders = new Mongo.Collection('orders');
Kanbans = new Mongo.Collection('kanbans');
Kanbanstest = new Mongo.Collection('kanbanstest');
Colors = new Mongo.Collection('colors');
Datacenters = new Mongo.Collection('datacenters');
Dataentries = new Mongo.Collection('dataentries');

var Schemas = {};
/*
Schemas.Dataentries = new SimpleSchema({
    name: {
        type: String,
        label: "name"
        
    },
    date: {
        type: String,
        label: "date"
    },
    employeestatus: {
        type: String,
        label: "employeestatus"
    },
    department: {
        type: String,
        label: "department"
    },
    workcenter: {
        type: String,
        label: "workcenter"
    },
    shift: {
        type: String,
        label: "shift"
    },
    planned: {
        type: String,
        label: "planned",
        min: 0
    },
    actual: {
        type: String,
        label: "actual"
       
    },
    productivity: {
        type: Number,
        label: "productivity"
        
    },
    timestamp: {
        type: String,
        label: "timestamp"
        
    }
    
});

Dataentries.attachSchema(Schemas.Dataentries);
Dataentries.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
*/
/*
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

    */