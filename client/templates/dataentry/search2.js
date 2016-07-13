StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('entries');
Template.search2.helpers({
  settings: function() {
    return {
      position: Session.get("position"),
      limit: 10,
      rules: [
        {
          // token: '',
          collection: Entries,
          field: 'partnumber',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  },
  legends: function() {
    return Entries.find();
  }
});

