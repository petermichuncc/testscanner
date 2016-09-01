StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Datacenters');
Template.search2new.helpers({
 nba: function() {
  var distinctEntries = _.uniq(Datacenters.find({}, {sort: {workcenter:1}, fields: {workcenter:true}}).fetch().map(function(x) {
 return x.workcenter;
 }), true);
 return distinctEntries;
   // return Datacenters.find().fetch().map(function(it){ return it.workcenter; });
  },
  legends: function() {
    return Datacenters.find();
  }
});

Template.search2new.rendered = function() {
  Meteor.typeahead.inject();
};