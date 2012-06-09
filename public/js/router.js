define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'/': 'hello',
			'/signup': 'signup',
			'/view/:id': 'view',
			'/edit/:id': 'edit'
		},

		hello: function() {
			console.log('hello');
		},

		signup: function() {
			console.log('signup');
		},

		view: function() {
			console.log('view');
		},

		edit: function() {
			console.log('edit');
		}


	});

	var initialize = function(){
    	var app_router = new AppRouter;
    	console.log(app_router);
    	Backbone.history.start();
    };

  	return {
    	initialize: initialize
  	};

});