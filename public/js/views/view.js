define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var ViewingView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
    // Init here
  },

  render: function() {
    console.log('hello');
    $(this.el).html("Hello Viewer!");
    return this;
  }

}); 

return ViewingView;

});