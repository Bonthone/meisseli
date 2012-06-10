define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
  'views/index',
  'views/signup',
  'views/view',
  'views/edit',
  'views/twitter',
  'views/github',
  'views/stackoverflow',
], function($, _, Backbone, Handlebars, IndexView, SignUpView, ViewingView, EditView, TwitterView, GitHubView, StackOverFlowView) {

	var initialize = function() {
		if ($('#index').length != 0) {
		  var view = new IndexView({el: $('#index')}).render();
		}
		if ($('#signup').length != 0) {
		  var view = new SignUpView().render();
		  $('#signup').html(view.el);
		}
		if ($('#view').length != 0) {
		  var view = new ViewingView().render();
		  $('#view').html(view.el);
		}
		if ($('#edit').length != 0) {
		  var view = new EditView().render();
		  $('#edit').html(view.el);
		}

		// Services
		if ($('.tile.twitter').length != 0) {
		  var view = new TwitterView().render();
		  $('.tile.twitter .content').html(view.el);
		}
		if ($('.tile.github').length != 0) {
		  var view = new GitHubView().render();
		  $('.tile.github .content').html(view.el);
		}
		if ($('.tile.stackoverflow').length != 0) {
		  var view = new StackOverFlowView().render();
		  $('.tile.stackoverflow .content').html(view.el);
		}
	};
  
  	return {
  		initialize: initialize
  	};
});