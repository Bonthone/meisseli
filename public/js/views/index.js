define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var IndexView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
    // Init here
  },

  render: function() {
    console.log('hello');
    $(this.el).html("Hello World!");
    return this;
  }

}); 

return IndexView;

});