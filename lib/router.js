
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
    Router.route('/zero', {name: 'zero'});
    Router.route('/testgraph', {name: 'testgraph'});
    Router.route('/testgraphnew', {name: 'testgraphnew'});
    Router.route('/testgraph3', {name: 'testgraph3'});
    Router.route('/table', {name: 'table'});
      Router.route('/history', {name: 'history'});
