define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var SignUpView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
    // Init here
  },

  render: function() {
    console.log('hello');
    $(this.el).html("Signup World");
    return this;
  }

}); 

return SignUpView;

});