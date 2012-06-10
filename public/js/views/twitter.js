define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'text!/templates/twitter.html'
], function($, _, Backbone, models, template_text) {

var template = Handlebars.compile(template_text);

var TwitterView = Backbone.View.extend({

  initialize: function(options) {
    _.bindAll(this, 'render', 'printModel');
    this.model = new models.TwitterProfile({screen_name: options.identifier});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    return this;
  },

  printModel: function() {
    $(this.el).html(template(this.model.attributes));
    console.log('TWITTER');
    console.log(this.model.attributes);
  }

}); 

return TwitterView;

});