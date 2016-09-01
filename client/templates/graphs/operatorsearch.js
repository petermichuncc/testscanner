StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Dataentries');
 console.log("test")
Template.opsearch.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 1,
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
/*var distinctEntries = _.uniq(Dataentries.find({name:Session.get("operator")}, {sort: {name:1}, fields: {name:true}}).fetch().map(function(x) {
 return x;
 }), true);
 return distinctEntries;*/
   // return Dataentries.find();
  }
});

