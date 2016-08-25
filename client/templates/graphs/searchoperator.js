StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Dataentries');
Template.searchoperator.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 1,
      rules: [
        {
          // token: '',
          collection: Dataentries,
          field: 'workcenter',
          matchAll: true,
          template: Template.standardoperator
        }
      ]
    };
  },
  legends: function() {
    return Dataentries.find({name:Session.get("operatorchoice")});
  },
  dataentries: function() {
    return Dataentries.find({name:Session.get("operatorchoice")});
  }
});

