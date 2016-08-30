StandardLegends = new Mongo.Collection(null);
 Meteor.subscribe('Dataentries');
 Template.searchoperator.rendered = function(){
    


};

Template.searchoperator.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 3,
      rules: [
        {
          // token: '',
          collection: Dataentries,
          field: 'workcenter',
          matchAll: false,
          template: Template.standardoperator
        }
      ]
    };
  },
  legends: function() {
    return Dataentries.find({name:Session.get("operator")});
  },
  dataentries: function() {
    /*
    I need to return only unique values

*/
   // console.log("this is the count " +Dataentries.find({name:Session.get("operator")}).count() )
    //return Dataentries.find({name:Session.get("operator")});
   var distinctEntries = _.uniq(Dataentries.find({name:Session.get("operator")}, {sort: {workcenter:1}, fields: {workcenter:true}}).fetch().map(function(x) {
 return x.workcenter;
 }), true);
 return distinctEntries;
  }
});

