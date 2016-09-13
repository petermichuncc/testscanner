
 Router.configure({
  layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
    // waitOn: function () {
    //     return [Meteor.subscribe('workcenters')];
    // }
    
     
   
 });

 Router.route('/alltemps', {name: 'alltemps'});
 Router.route('/', {name: 'three'});
  

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
      Router.route('/testgraphoperator', {name: 'testgraphoperator'});
      Router.route('/testgraphworkcell', {name: 'testgraphworkcell'});
     Router.route('/graph', {name: 'graph'});
    Router.route('/table', {name: 'table'});
      Router.route('/history', {name: 'history'});
       Router.route('/datasearch', {name: 'datasearch'});
        Router.route('/button', {name: 'button'});
        Router.route('/all', {name: 'allworkcell'});
         Router.route('/parttable', {name: 'parttable'});
 Router.route('/search2new', {name: 'search2new'});