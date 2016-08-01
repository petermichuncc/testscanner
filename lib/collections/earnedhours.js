Scans = new Mongo.Collection('scans');
Upcs = new Mongo.Collection('upcs');
Orders = new Mongo.Collection('orders');
Kanbans = new Mongo.Collection('kanbans');
Colors = new Mongo.Collection('colors');
Datacenters = new Mongo.Collection('datacenters');
Dataentries = new Mongo.Collection('dataentries');
Dataentries.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "name",
    max: 200
  },
  date: {
    type: String,
    label: "date"
  },
  employeestatus: {
    type: String,
    label: "employeestatus",
    min: 0
  },
 department: {
    type: String,
    label: "department",
    min: 0
  },
  workcenter: {
    type: String,
    label: "workcenter",
    min: 0
  },
  shift: {
    type: String,
    label: "shift",
    min: 0
  },
  planned: {
    type: String,
    label: "planned",
    min: 0
  },
  actual: {
    type: String,
    label: "actual",
    min: 0
  },
  productivity: {
    type: Number,
    label: "productivity",
    min: 0
  },
  timestamp: {
    type: String,
    label: "timestamp",
    min: 0
  },
}));