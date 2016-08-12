StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Datacenters');
Template.search2.helpers({
  settings: function() {
    return {
      position: Session.get("position"),
      limit: 1,
      rules: [
        {
          // token: '',
          collection: Datacenters,
          field: 'workcenter',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  },
  legends: function() {
    return Datacenters.find();
  }
});

