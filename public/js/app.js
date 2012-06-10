define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
  'views/index',
  'views/signup',
  'views/view',
  'views/edit',
  'views/footer'
], function($, _, Backbone, Handlebars, IndexView, SignUpView, ViewingView, EditView, FooterView) {

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
    new FooterView({el: $('footer')});
	};
  
  return {
  	initialize: initialize
  };
});