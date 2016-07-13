
 Router.configure({
  layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
    // waitOn: function () {
    //     return [Meteor.subscribe('workcenters')];
    // }
    
     
   
 });


 Router.route('/', {name: 'scan'});
  Router.route('/one', {name: 'one'});
Router.route('/two', {name: 'two'});
Router.route('/three', {name: 'three'});
Router.route('/final', {name: 'final'});
Router.route('/main', {name: 'main'});
Router.route('/main1', {name: 'main1'});
 Router.route('/test', {name: 'test'});
  Router.route('/intro', {name: 'intro'});
  Router.route('/first', {name: 'first'}); 
   Router.route('/start', {name: 'start'});