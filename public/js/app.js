define([
	'jquery',
	'underscore',
	'backbone',
  'views/index',
  'views/signup',
  'views/view',
  'views/edit'
], function($, _, Backbone, IndexView, SignUpView, ViewingView, EditView) {

	var initialize = function() {
    if ($('#index').length != 0) {
      var view = new IndexView().render();
      $('#index').html(view.el);
    }
    if ($('#signin').length != 0) {
      var view = new SignUpView().render();
      $('#signup').html(view.el);
    }
    if ($('').length != 0) {
      var view = new ViewingView().render();
      $('#view').html(view.el);
    }
    if ($('#edit').length != 0) {
      var view = new EditView().render();
      $('#edit').html(view.el);
    }
	};
  
  	return {
  		initialize: initialize
  	};
});