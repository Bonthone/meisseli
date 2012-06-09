define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var EditView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
    // Init here
  },

  render: function() {
    console.log('hello');
    $(this.el).html("Hello Editor!");
    return this;
  }

}); 

return EditView;

});