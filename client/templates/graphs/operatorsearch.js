StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Dataentries');
Template.opsearch.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 2,
      options: 'i',
      rules: [
        {
          // token: '',
          collection: Dataentries,
          field: 'name',
          matchAll: true,
          template: Template.standardLegends1
        }
      ]
    };
  },
  legends: function() {
    return Dataentries.find();
  }
});

