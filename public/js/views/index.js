define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'text!/templates/test.html'
], function($, _, Backbone, models, template) {


var IndexView = Backbone.View.extend({

  events: {
    'click .signupbutton': 'keittoa'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'printModel', 'keittoa');
    this.model = new models.TwitterProfile({user_id: "ComptelCorp"});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    console.log('hello');
    return this;
  },

  printModel: function() {
    console.log(this.$el);
    console.log(this.model);
  },

  keittoa: function() {
   window.location = "../signup";
  }

}); 

return IndexView;

});