//File that publishes all the databases used

Meteor.publish('scans', function() {
  return Scans.find();
});

Meteor.publish('datacenters', function() {
  return Datacenters.find();
});

Meteor.publish('dataentries', function() {
  return Dataentries.find();
});