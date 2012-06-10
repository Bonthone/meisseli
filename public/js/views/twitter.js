define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'text!/templates/twitter.html'
], function($, _, Backbone, models, template_text) {

  var template = Handlebars.compile(template_text);

var TwitterView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render', 'printModel');
    this.model = new models.TwitterProfile({screen_name: "twitterapi"});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    console.log(this.model.attributes);
    $(this.el).html(template(this.model.attributes));
    return this;
  },

  printModel: function() {
    console.log('TWITTER');
    console.log(this.model.attributes);
  }

}); 

return TwitterView;

});