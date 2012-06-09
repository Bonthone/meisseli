define([
  'jquery',
  'underscore',
  'backbone',
  'models'
], function($, _, Backbone, models) {

var IndexView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render', 'printModel');
    this.model = new models.GitHubProfile({user_name: "defunkt"});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    console.log('hello');
    $(this.el).html("Hello World!");
    return this;
  },

  printModel: function() {
    console.log('HELLO');
    console.log(this.model);
  }

}); 

return IndexView;

});