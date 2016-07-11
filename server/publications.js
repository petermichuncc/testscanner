//File that publishes all the databases used

Meteor.publish('scans', function() {
  return Scans.find();
});
