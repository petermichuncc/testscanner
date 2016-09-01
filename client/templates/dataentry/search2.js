StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Datacenters');
Template.search2.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 12,
      rules: [
        {
          // token: '',
          collection: Datacenters,
          field: 'workcenter',
          matchAll: false,
          template: Template.standardLegends
        }
      ]
    };
  },
  legends: function() {
    return Datacenters.find();
  }
});

